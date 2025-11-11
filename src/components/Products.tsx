import { Sparkles, Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Products() {
  const products = [
    {
      name: 'Tép Biển Nam Ô',
      grade: 'Đặc Sản',
      description: 'Tép biển Nam Ô khô, thơm ngon tự nhiên. Phơi khô tự nhiên dưới nắng gió biển, giữ trọn vị ngọt của tép.',
      price: '95.000đ',
      unit: 'hộp 250g',
      image: '/src/imgs/sp1/sp1_1.jpg',
      highlight: true,
    },
    {
      name: 'Nước Mắm Ủ 2 Năm',
      grade: '40°N',
      description: 'Nước mắm cao cấp ủ 24 tháng trong chum gốm. Độ đạm 40°N, hương thơm nồng nàn, lý tưởng cho món chấm cao cấp.',
      price: '180.000đ',
      unit: 'chai 500ml',
      image: '/src/imgs/sp2/sp2_1.png',
      highlight: false,
    },
    {
      name: 'Nước Mắm Ủ 1 Năm',
      grade: '30°N',
      description: 'Nước mắm truyền thống ủ 12 tháng. Cân bằng hoàn hảo giữa vị mặn, ngọt và umami, phù hợp cho mọi món ăn.',
      price: '120.000đ',
      unit: 'chai 500ml',
      image: '/src/imgs/sp3/sp3_1.png',
      highlight: false,
    },
  ];

  return (
    <section id="products" className="py-24 bg-[#F8F5EF] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#167E7E]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B5651D]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#167E7E]/10 rounded-full mb-6" data-aos="fade-down">
            <span className="text-sm font-medium text-[#167E7E] tracking-widest">SẢN PHẨM</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D59] mb-6" data-aos="fade-up">
            Tinh Hoa Từ Biển
          </h2>

          <p className="text-lg text-[#0B3D59]/70 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Ba dòng sản phẩm chất lượng, phục vụ từ bữa ăn gia đình
            đến các nhà hàng cao cấp
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                product.highlight
                  ? 'border-[#C9A227] shadow-xl'
                  : 'border-[#E6D5B8]'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {product.highlight && (
                <div className="absolute top-4 right-4 bg-[#C9A227] text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 z-10">
                  <Star className="w-3 h-3" fill="currentColor" />
                  CAO CẤP
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#E6D5B8] to-[#F8F5EF]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Grade Badge on Image */}
                <div className="absolute bottom-4 left-4">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md ${
                    product.highlight
                      ? 'bg-[#C9A227]/90 text-white'
                      : 'bg-white/90 text-[#167E7E]'
                  }`}>
                    <Sparkles className="w-4 h-4" />
                    {product.grade}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B3D59] mb-3">
                  {product.name}
                </h3>

                <p className="text-[#0B3D59]/70 mb-6 leading-relaxed text-sm min-h-[80px]">
                  {product.description}
                </p>

                <div className="border-t border-[#E6D5B8] pt-4 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#B5651D]">
                      {product.price}
                    </span>
                    <span className="text-sm text-[#0B3D59]/60">/ {product.unit}</span>
                  </div>
                </div>

                <Link to="/shop">
                  <motion.button
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      product.highlight
                        ? 'bg-[#B5651D] text-white hover:shadow-lg hover:ring-2 hover:ring-[#C9A227]'
                        : 'bg-[#0B3D59] text-white hover:bg-[#167E7E]'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Đặt Hàng Ngay
                  </motion.button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
         
          
          <div className="inline-block bg-[#E6D5B8] rounded-lg p-8 max-w-2xl" data-aos="zoom-in" data-aos-delay="200">
            <p className="text-[#0B3D59] leading-relaxed">
              <span className="font-bold text-[#167E7E]">Giao hàng toàn quốc</span> —
              Đặt từ 5 chai trở lên được tặng thêm mắm ruốc đặc sản.
              Đơn hàng trên 1 triệu miễn phí vận chuyển.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
