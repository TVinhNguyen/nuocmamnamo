import { Phone, Mail, ShoppingCart, Award, Package } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import AnimatedButton from './AnimatedButton';
import AnimatedCard from './AnimatedCard';
import 'swiper/css';
import 'swiper/css/pagination';

/**
 * Component Demo - Tổng hợp các thư viện đã tích hợp
 * Đây là file demo để bạn tham khảo cách sử dụng
 * Có thể xóa file này sau khi đã hiểu cách dùng
 */

export default function LibraryDemo() {
  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ========== 1. AOS Demo ========== */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center" data-aos="fade-down">
            1. AOS - Animate On Scroll
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg" data-aos="fade-up">
              <Award className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fade Up</h3>
              <p>Animation từ dưới lên</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <Package className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fade Up Delay</h3>
              <p>Có độ trễ 100ms</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg" data-aos="zoom-in" data-aos-delay="200">
              <ShoppingCart className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Zoom In</h3>
              <p>Animation phóng to vào</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div data-aos="fade-right">← Fade Right</div>
            <div data-aos="fade-left">Fade Left →</div>
            <div data-aos="flip-up">↑ Flip Up</div>
          </div>
        </section>

        {/* ========== 2. Swiper Demo ========== */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center" data-aos="fade-down">
            2. Swiper - Carousel/Slider
          </h2>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              loop={true}
              className="h-[400px]"
            >
              {[1, 2, 3].map((num) => (
                <SwiperSlide key={num}>
                  <div 
                    className="w-full h-full flex items-center justify-center text-white text-4xl font-bold"
                    style={{ 
                      background: `linear-gradient(135deg, #667eea ${num * 20}%, #764ba2 100%)` 
                    }}
                  >
                    Slide {num}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Slider */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            className="py-10"
          >
            {[1, 2, 3, 4].map((num) => (
              <SwiperSlide key={num}>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-full h-40 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg mb-4" />
                  <h3 className="font-bold text-lg">Sản phẩm {num}</h3>
                  <p className="text-gray-600">150.000 VNĐ</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* ========== 3. Lucide React Icons Demo ========== */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center" data-aos="fade-down">
            3. Lucide React - Icons
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center" data-aos="zoom-in">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold">Phone</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center" data-aos="zoom-in" data-aos-delay="50">
              <Mail className="w-12 h-12 text-red-600 mx-auto mb-2" />
              <p className="font-semibold">Mail</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center" data-aos="zoom-in" data-aos-delay="100">
              <ShoppingCart className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <p className="font-semibold">Cart</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center" data-aos="zoom-in" data-aos-delay="150">
              <Award className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
              <p className="font-semibold">Award</p>
            </div>
          </div>
        </section>

        {/* ========== 4. Framer Motion Demo ========== */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center" data-aos="fade-down">
            4. Framer Motion - Micro Interactions
          </h2>
          
          {/* Animated Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton variant="primary" icon={Phone}>
              Primary Button
            </AnimatedButton>
            
            <AnimatedButton variant="secondary" icon={Mail}>
              Secondary Button
            </AnimatedButton>
            
            <AnimatedButton variant="outline" icon={ShoppingCart}>
              Outline Button
            </AnimatedButton>
          </div>

          {/* Animated Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedCard delay={0}>
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Card 1</h3>
                <p className="text-gray-600">Hover để xem hiệu ứng</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={100}>
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Card 2</h3>
                <p className="text-gray-600">Animation mượt mà</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Card 3</h3>
                <p className="text-gray-600">Scale + Shadow effect</p>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* ========== 5. Combined Demo ========== */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center" data-aos="fade-down">
            5. Kết Hợp Tất Cả
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <AnimatedCard key={num} delay={num * 100}>
                <div 
                  className="h-48 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, #667eea ${num * 20}%, #764ba2 100%)` 
                  }}
                >
                  <Award className="w-16 h-16 text-white" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold" data-aos="fade-up">
                    Sản phẩm {num}
                  </h3>
                  <p className="text-gray-600" data-aos="fade-up" data-aos-delay="50">
                    Mô tả sản phẩm ngắn gọn
                  </p>
                  <div className="flex items-center justify-between" data-aos="fade-up" data-aos-delay="100">
                    <span className="text-2xl font-bold text-amber-600">
                      150.000₫
                    </span>
                    <AnimatedButton variant="primary" icon={ShoppingCart}>
                      Mua
                    </AnimatedButton>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* Info Box */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-8 text-center" data-aos="zoom-in">
          <h3 className="text-2xl font-bold mb-4 text-amber-900">
            🎉 Tất cả thư viện đã sẵn sàng!
          </h3>
          <p className="text-amber-800 mb-6">
            Bạn có thể sử dụng các component và hiệu ứng này trong dự án của mình.
            Xem file <code className="bg-amber-200 px-2 py-1 rounded">LIBRARY_GUIDE.md</code> để biết thêm chi tiết.
          </p>
          <AnimatedButton variant="primary">
            Bắt đầu sử dụng
          </AnimatedButton>
        </div>

      </div>
    </div>
  );
}
