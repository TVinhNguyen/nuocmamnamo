# 🎯 Nước Mắm Nam Ô - Landing Page

Landing page chuyên nghiệp cho sản phẩm nước mắm Nam Ô truyền thống Đà Nẵng.

## 🚀 Chạy Dự Án

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy development server
```bash
npm run dev
```

Mở trình duyệt và truy cập: `http://localhost:5173`

### 3. Build production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## 📦 Công Nghệ Sử Dụng

### Core
- ⚛️ **React 18** - UI Library
- 📘 **TypeScript** - Type Safety
- ⚡ **Vite** - Build Tool
- 🎨 **Tailwind CSS** - Styling

### Animation & Effects
- ✨ **AOS (Animate On Scroll)** - Scroll animations
- 🎠 **Swiper.js** - Carousel/Slider
- 🎭 **Framer Motion** - Micro-interactions

### UI & Icons
- 🎨 **Lucide React** - Beautiful icons

### SEO & Meta
- 🎯 **React Helmet Async** - Meta tags management
- 📋 **Schema.org JSON-LD** - Structured data
  - Organization
  - LocalBusiness
  - Product

### Database (Optional)
- 🗄️ **Supabase** - Backend as a Service

## 📁 Cấu Trúc Dự Án

```
src/
├── components/
│   ├── Navigation.tsx          # Header navigation
│   ├── Hero.tsx                # Hero section
│   ├── Heritage.tsx            # Di sản section
│   ├── Products.tsx            # Sản phẩm section
│   ├── Craft.tsx               # Quy trình làm section
│   ├── Certifications.tsx      # Chứng nhận section
│   ├── Contact.tsx             # Liên hệ section
│   ├── SEO.tsx                 # SEO component
│   ├── HeroSwiper.tsx          # Swiper component mẫu
│   ├── AnimatedButton.tsx      # Button with animation
│   ├── AnimatedCard.tsx        # Card with hover effect
│   └── LibraryDemo.tsx         # Demo các thư viện
├── utils/
│   └── animations.ts           # Framer Motion variants
├── App.tsx                     # Main app component
├── main.tsx                    # Entry point
└── index.css                   # Global styles
```

## 🎨 Các Component Có Sẵn

### 1. AnimatedButton
Button với hover và tap animations
```tsx
<AnimatedButton icon={Phone} variant="primary">
  Liên hệ ngay
</AnimatedButton>
```

### 2. AnimatedCard
Card với hover effect (scale + shadow)
```tsx
<AnimatedCard delay={100}>
  {/* Nội dung */}
</AnimatedCard>
```

### 3. HeroSwiper
Slider/carousel chuyên nghiệp
```tsx
<HeroSwiper />
```

### 4. SEO
Quản lý SEO và meta tags
```tsx
<SEO 
  title="Tiêu đề trang"
  description="Mô tả"
  image="/og-image.jpg"
  url="https://domain.com"
/>
```

## 🎯 Hướng Dẫn Sử Dụng

### AOS - Animate On Scroll
Thêm vào bất kỳ element nào:
```tsx
<div data-aos="fade-up">Nội dung</div>
<div data-aos="zoom-in" data-aos-delay="200">Nội dung</div>
```

**Các hiệu ứng:**
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-up`, `flip-down`
- `slide-up`, `slide-down`

### Swiper
```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

<Swiper spaceBetween={30} slidesPerView={1}>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
</Swiper>
```

### Lucide Icons
```tsx
import { Heart, Phone, Mail } from 'lucide-react';

<Heart className="w-6 h-6 text-red-500" />
```

### Framer Motion
```tsx
import { motion } from 'framer-motion';

<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Nội dung
</motion.div>
```

📖 **Xem chi tiết trong file:** [`LIBRARY_GUIDE.md`](./LIBRARY_GUIDE.md)

## 🔍 SEO Features

✅ Meta tags đầy đủ (title, description, keywords)  
✅ Open Graph tags (Facebook, LinkedIn)  
✅ Twitter Card tags  
✅ Schema.org JSON-LD:
  - Organization
  - LocalBusiness
  - Product  
✅ Canonical URL  
✅ Language & locale  

## 📱 Responsive Design

- 📱 Mobile: < 640px
- 📱 Tablet: 640px - 1024px
- 💻 Desktop: > 1024px

## 🎨 Design System

### Colors
- Primary: Amber (#D97706)
- Background: Cream (#F8F5EF)
- Text: Slate (#334155)

### Typography
- Headings: Bold, 2xl-6xl
- Body: Regular, base-lg

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop dist folder to netlify.com
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder
```

## 📝 TODO

- [ ] Thay ảnh demo bằng ảnh thực
- [ ] Cập nhật thông tin liên hệ trong SEO.tsx
- [ ] Tạo ảnh OG (1200x630px)
- [ ] Thêm Google Analytics
- [ ] Tích hợp form liên hệ
- [ ] Thêm i18n (đa ngôn ngữ)

## 📄 License

MIT License - Free to use

## 🤝 Support

Cần hỗ trợ? Liên hệ:
- 📧 Email: support@nuocmamnamo.vn
- 📱 Phone: +84-236-3XXX-XXX

---

Made with ❤️ for Nam O Fish Sauce
