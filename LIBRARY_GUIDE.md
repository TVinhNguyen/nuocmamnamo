# Hướng Dẫn Sử Dụng Các Thư Viện

## 📦 Các Package Đã Cài Đặt

### 1. **AOS (Animate On Scroll)** ✨
Thư viện tạo hiệu ứng animation khi scroll.

#### Cách sử dụng:
```tsx
// Đã được khởi tạo tự động trong App.tsx

// Thêm vào bất kỳ element nào:
<div data-aos="fade-up">Nội dung</div>
<div data-aos="zoom-in" data-aos-delay="200">Nội dung</div>
<div data-aos="fade-left" data-aos-duration="1000">Nội dung</div>
```

#### Các hiệu ứng phổ biến:
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-up`, `flip-down`
- `slide-up`, `slide-down`

#### Thuộc tính:
- `data-aos-delay="200"` - Độ trễ (ms)
- `data-aos-duration="800"` - Thời gian animation (ms)
- `data-aos-once="true"` - Chỉ chạy 1 lần

---

### 2. **Swiper.js** 🎠
Thư viện tạo slider/carousel chuyên nghiệp.

#### Cách sử dụng:
Xem file `src/components/HeroSwiper.tsx` để tham khảo.

```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

<Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  autoplay={{ delay: 3000 }}
  pagination={{ clickable: true }}
>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
</Swiper>
```

#### Modules phổ biến:
- `Autoplay` - Tự động chạy
- `Pagination` - Dấu chấm phân trang
- `Navigation` - Nút prev/next
- `EffectFade` - Hiệu ứng fade
- `EffectCube` - Hiệu ứng 3D cube

---

### 3. **Lucide React** 🎨
Thư viện icon đẹp và nhẹ (đã có sẵn).

#### Cách sử dụng:
```tsx
import { Heart, ShoppingCart, Phone, Mail } from 'lucide-react';

<Heart className="w-6 h-6 text-red-500" />
<ShoppingCart size={24} />
<Phone strokeWidth={2} />
```

#### Icon phổ biến:
- `Phone`, `Mail`, `MapPin` - Liên hệ
- `Heart`, `Star`, `Award` - Rating/favorite
- `ShoppingCart`, `Package`, `Truck` - E-commerce
- `Facebook`, `Instagram`, `Twitter` - Social media
- `Menu`, `X`, `ChevronDown` - Navigation

---

### 4. **Framer Motion** 🎭
Thư viện animation mượt mà cho React.

#### Cách sử dụng:

**Component AnimatedButton** (đã tạo sẵn):
```tsx
import AnimatedButton from './components/AnimatedButton';
import { Phone } from 'lucide-react';

<AnimatedButton 
  icon={Phone} 
  variant="primary"
  onClick={() => console.log('Clicked!')}
>
  Liên hệ ngay
</AnimatedButton>
```

**Component AnimatedCard** (đã tạo sẵn):
```tsx
import AnimatedCard from './components/AnimatedCard';

<AnimatedCard delay={100}>
  <img src="product.jpg" alt="Product" />
  <h3>Sản phẩm</h3>
</AnimatedCard>
```

**Tự custom:**
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3 }}
>
  Nội dung
</motion.div>
```

---

### 5. **React Helmet Async** 🎯
Quản lý SEO và meta tags.

#### Đã tích hợp sẵn trong component SEO:
```tsx
// File: src/components/SEO.tsx
// Sử dụng trong App.tsx: <SEO />

// Có thể custom cho từng trang:
<SEO 
  title="Trang sản phẩm - Nước Mắm Nam Ô"
  description="Khám phá các sản phẩm nước mắm..."
  image="/products-og.jpg"
  url="https://nuocmamnamo.vn/san-pham"
/>
```

---

### 6. **Schema.org JSON-LD** 📋
SEO structured data (đã tích hợp trong SEO component).

#### Bao gồm:
- ✅ Organization - Thông tin doanh nghiệp
- ✅ LocalBusiness - Thông tin địa phương
- ✅ Product - Thông tin sản phẩm
- ✅ OpenGraph - Preview trên social media

---

## 🎨 Ví Dụ Kết Hợp

### Ví dụ 1: Product Card với tất cả hiệu ứng
```tsx
import AnimatedCard from './components/AnimatedCard';
import AnimatedButton from './components/AnimatedButton';
import { ShoppingCart } from 'lucide-react';

<AnimatedCard delay={100}>
  <img 
    src="product.jpg" 
    alt="Product" 
    data-aos="zoom-in"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold" data-aos="fade-up">
      Nước mắm Nam Ô 40 độ đạm
    </h3>
    <p data-aos="fade-up" data-aos-delay="100">
      150.000 VNĐ
    </p>
    <AnimatedButton 
      icon={ShoppingCart}
      variant="primary"
      className="mt-4"
    >
      Mua ngay
    </AnimatedButton>
  </div>
</AnimatedCard>
```

### Ví dụ 2: Hero Section với Swiper
```tsx
import HeroSwiper from './components/HeroSwiper';

<section className="relative">
  <HeroSwiper />
  <div className="absolute bottom-10 left-0 right-0 text-center">
    <AnimatedButton 
      variant="primary"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      Khám phá ngay
    </AnimatedButton>
  </div>
</section>
```

---

## 🚀 Performance Tips

### AOS:
- ✅ Sử dụng `once: true` để animation chỉ chạy 1 lần
- ✅ Không lạm dụng quá nhiều animation trên 1 trang
- ✅ Duration nên từ 600-1000ms

### Swiper:
- ✅ Chỉ import modules cần dùng
- ✅ Lazy load images: `<img loading="lazy" />`
- ✅ Tối ưu kích thước ảnh

### Framer Motion:
- ✅ Chỉ dùng cho micro-interactions (button, hover)
- ⚠️ KHÔNG dùng cho animation lớn (có AOS rồi)
- ✅ Sử dụng `whileHover` và `whileTap` cho UX tốt hơn

---

## 📝 Checklist Tích Hợp

- [x] AOS - Đã khởi tạo trong App.tsx
- [x] Swiper - Component HeroSwiper đã sẵn sàng
- [x] Lucide React - Đã cài đặt (import để dùng)
- [x] Framer Motion - AnimatedButton & AnimatedCard sẵn sàng
- [x] React Helmet - SEO component hoàn chỉnh
- [x] Schema.org JSON-LD - Đã tích hợp trong SEO

---

## 🎯 Next Steps

1. **Thay thế ảnh thực tế** trong HeroSwiper
2. **Thêm AOS attributes** vào các section hiện có
3. **Sử dụng AnimatedButton** thay cho button thường
4. **Wrap product cards** với AnimatedCard
5. **Cập nhật thông tin** trong SEO component (URL, số điện thoại, địa chỉ)
6. **Tạo ảnh OG** (Open Graph) với kích thước 1200x630px

---

## 📚 Tài Liệu Tham Khảo

- AOS: https://michalsnik.github.io/aos/
- Swiper: https://swiperjs.com/react
- Lucide: https://lucide.dev/icons
- Framer Motion: https://www.framer.com/motion/
- Schema.org: https://schema.org/
