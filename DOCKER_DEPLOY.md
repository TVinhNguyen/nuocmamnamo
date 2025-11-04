# 🚀 Hướng Dẫn Deploy với Docker Compose trên Server

## ⚡ Cách Deploy Nhanh Nhất (5 phút)

### Bước 1: Chuẩn Bị Server

```bash
# SSH vào server
ssh user@your-server-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Cài Docker và Docker Compose (nếu chưa có)
sudo apt install docker.io docker-compose -y

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker

# Add user vào docker group (không cần sudo)
sudo usermod -aG docker $USER

# Logout và login lại để apply group changes
exit
# SSH lại vào server
```

---

### Bước 2: Clone Code về Server

```bash
# Tạo thư mục cho project
mkdir -p ~/projects
cd ~/projects

# Clone repo (thay YOUR_REPO_URL)
git clone YOUR_REPO_URL thuongmaidientu
cd thuongmaidientu

# Hoặc nếu chưa có Git repo, upload code bằng SCP:
# Từ máy local:
# scp -r /path/to/project user@server-ip:~/projects/thuongmaidientu
```

---

### Bước 3: Deploy với Docker Compose

```bash
# Build và start container
docker-compose up -d --build

# Xem logs
docker-compose logs -f

# Kiểm tra status
docker-compose ps
```

✅ **XONG!** Website đã LIVE tại: `http://your-server-ip`

---

## 📋 Các Lệnh Docker Compose Quan Trọng

### Start/Stop/Restart
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Restart services
docker-compose restart

# Stop và xóa containers + volumes
docker-compose down -v
```

### View Logs
```bash
# Xem tất cả logs
docker-compose logs

# Xem logs real-time
docker-compose logs -f

# Xem logs của service cụ thể
docker-compose logs -f web

# Xem 100 dòng cuối
docker-compose logs --tail=100
```

### Rebuild & Update
```bash
# Rebuild image sau khi thay đổi code
docker-compose up -d --build

# Pull code mới và rebuild
git pull
docker-compose up -d --build

# Force recreate containers
docker-compose up -d --force-recreate
```

### Debugging
```bash
# Exec vào container
docker-compose exec web sh

# Kiểm tra health
docker-compose ps

# Xem resource usage
docker stats
```

---

## 🔄 Workflow Update Code

### Cách 1: Git Pull (Khuyến nghị)

```bash
cd ~/projects/thuongmaidientu

# Pull code mới
git pull origin main

# Rebuild và deploy
docker-compose up -d --build
```

### Cách 2: Upload Code Mới

```bash
# Từ máy local, build trước
npm run build

# Upload dist folder
scp -r dist/* user@server-ip:~/projects/thuongmaidientu/dist/

# Trên server, restart
cd ~/projects/thuongmaidientu
docker-compose restart
```

---

## 🌐 Setup Domain & SSL

### Cài Nginx Reverse Proxy (trên server)

```bash
sudo apt install nginx certbot python3-certbot-nginx -y
```

### Tạo Nginx Config

```bash
sudo nano /etc/nginx/sites-available/nuocmamnamo
```

Paste nội dung:

```nginx
server {
    listen 80;
    server_name nuocmamnamo.vn www.nuocmamnamo.vn;

    location / {
        proxy_pass http://localhost:80;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/nuocmamnamo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Setup SSL với Let's Encrypt

```bash
sudo certbot --nginx -d nuocmamnamo.vn -d www.nuocmamnamo.vn
```

✅ **Website với HTTPS!** `https://nuocmamnamo.vn`

---

## 📦 Cập Nhật docker-compose.yml (Optional)

Nếu muốn custom thêm:

```yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: nuocmamnamo-web
    restart: unless-stopped
    ports:
      - "8080:80"  # Thay port nếu cần
    environment:
      # Thêm env variables nếu cần
      - NODE_ENV=production
    networks:
      - app-network
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/"]
      interval: 30s
      timeout: 10s
      retries: 3

networks:
  app-network:
    driver: bridge
```

---

## 🔍 Troubleshooting

### Port đã được sử dụng
```bash
# Kiểm tra port 80
sudo lsof -i :80

# Kill process nếu cần
sudo kill -9 <PID>

# Hoặc đổi port trong docker-compose.yml
ports:
  - "8080:80"  # Thay vì 80:80
```

### Container không start
```bash
# Xem logs chi tiết
docker-compose logs web

# Check Docker daemon
sudo systemctl status docker

# Restart Docker
sudo systemctl restart docker
```

### Website trắng xóa
```bash
# Exec vào container
docker-compose exec web sh

# Check files
ls -la /usr/share/nginx/html/

# Check nginx config
nginx -t
```

### Rebuild từ đầu
```bash
# Stop và xóa mọi thứ
docker-compose down -v

# Xóa images
docker system prune -a

# Build lại từ đầu
docker-compose up -d --build
```

---

## 📊 Monitoring & Maintenance

### Check Resource Usage
```bash
# Container stats
docker stats

# Disk usage
docker system df

# Container health
docker-compose ps
```

### Cleanup
```bash
# Remove unused images
docker image prune -a

# Remove unused volumes
docker volume prune

# Remove everything unused
docker system prune -a --volumes
```

### Backup
```bash
# Backup image
docker save nuocmamnamo-web > nuocmamnamo-backup.tar

# Backup code
tar -czf backup-$(date +%Y%m%d).tar.gz ~/projects/thuongmaidientu/
```

---

## 🎯 Script Deploy Tự Động

Tạo file `deploy.sh`:

```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Pull latest code
echo "📥 Pulling latest code..."
git pull origin main

# Build and deploy
echo "🔨 Building and deploying..."
docker-compose up -d --build

# Check health
echo "🔍 Checking health..."
sleep 5
docker-compose ps

echo "✅ Deployment completed!"
echo "🌐 Website: http://$(hostname -I | awk '{print $1}')"
```

Sử dụng:

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 📝 Checklist

- [x] Docker và Docker Compose đã cài
- [x] Code đã clone về server
- [x] `docker-compose.yml` đã có
- [x] `Dockerfile` đã có
- [x] `nginx.conf` đã có
- [x] Build và start: `docker-compose up -d --build`
- [ ] Setup domain (optional)
- [ ] Setup SSL (optional)
- [ ] Setup monitoring (optional)

---

## 💡 Tips

1. **Git Workflow**: Push code lên GitHub/GitLab, server pull về
2. **CI/CD**: Setup GitHub Actions để auto deploy
3. **Backup**: Backup code và Docker images thường xuyên
4. **Monitoring**: Dùng Portainer để quản lý Docker qua UI
5. **Security**: Đổi port mặc định, setup firewall

---

**Thời gian deploy: ~5 phút** ⚡

Chúc bạn deploy thành công! 🎉
