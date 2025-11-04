import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=1920',
    title: 'Nước Mắm Nam Ô Truyền Thống',
    subtitle: 'Hương vị đậm đà của biển cả'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920',
    title: 'Ủ Theo Phương Pháp Cổ Truyền',
    subtitle: 'Giữ trọn tinh hoa làng nghề'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=1920',
    title: '100% Cá Cơm Tươi Ngon',
    subtitle: 'Chất lượng được chứng nhận'
  }
];

export default function HeroSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={true}
      loop={true}
      className="w-full h-[600px] lg:h-[700px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl lg:text-6xl font-bold mb-4" data-aos="fade-up">
                  {slide.title}
                </h2>
                <p className="text-xl lg:text-2xl" data-aos="fade-up" data-aos-delay="200">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
