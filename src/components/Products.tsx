import { Sparkles, Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Products() {
  const products = [
    {
      name: 'Nước Mắm Cá Cơm Đặc Biệt',
      grade: '40°N',
      description: 'Nước mắm cao cấp nhất, trong veo, đạm đặc, hương thơm nồng nàn. Lý tưởng cho các món nhúng, chấm và nêm cao cấp.',
      price: '180.000đ',
      unit: 'chai 500ml',
      highlight: true,
    },
    {
      name: 'Nước Mắm Truyền Thống',
      grade: '30°N',
      description: 'Công thức gia truyền, cân bằng hoàn hảo giữa vị mặn, ngọt và umami. Thích hợp cho mọi món ăn hàng ngày.',
      price: '120.000đ',
      unit: 'chai 500ml',
      highlight: false,
    },
    {
      name: 'Nước Mắm Nhà Làm',
      grade: '25°N',
      description: 'Phiên bản gia đình, giá cả phải chăng nhưng vẫn giữ trọn hương vị biển cả và quy trình làm tự nhiên.',
      price: '80.000đ',
      unit: 'chai 500ml',
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
              className={`relative bg-white rounded-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                product.highlight
                  ? 'border-[#C9A227] shadow-xl'
                  : 'border-[#E6D5B8]'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {product.highlight && (
                <div className="absolute top-4 right-4 bg-[#C9A227] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3" fill="currentColor" />
                  CAO CẤP
                </div>
              )}

              <div className={`h-2 ${product.highlight ? 'bg-[#C9A227]' : 'bg-[#167E7E]'}`}></div>

              <div className="p-8">
                <div className="mb-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${
                    product.highlight
                      ? 'bg-[#C9A227]/10 text-[#C9A227]'
                      : 'bg-[#167E7E]/10 text-[#167E7E]'
                  }`}>
                    <Sparkles className="w-4 h-4" />
                    {product.grade}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#0B3D59] mb-3">
                  {product.name}
                </h3>

                <p className="text-[#0B3D59]/70 mb-6 leading-relaxed min-h-[120px]">
                  {product.description}
                </p>

                <div className="border-t border-[#E6D5B8] pt-6 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#B5651D]">
                      {product.price}
                    </span>
                    <span className="text-sm text-[#0B3D59]/60">/ {product.unit}</span>
                  </div>
                </div>

                <motion.button
                  className={`w-full py-3 rounded-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-[#E6D5B8] rounded-lg p-8 max-w-2xl" data-aos="zoom-in" data-aos-delay="400">
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
