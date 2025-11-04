import { Anchor, Sun, Droplet } from 'lucide-react';

export default function Heritage() {
  return (
    <section id="heritage" className="py-24 bg-[#E6D5B8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#C9A227]/20 rounded-full mb-6" data-aos="fade-right">
              <span className="text-sm font-medium text-[#B5651D] tracking-widest">DI SẢN LÀNG NGHỀ</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D59] mb-6 leading-tight" data-aos="fade-right" data-aos-delay="100">
              Ba Thế Kỷ
              <span className="block text-[#167E7E]">Kết Tinh Biển Cả</span>
            </h2>

            <p className="text-lg text-[#0B3D59]/80 mb-6 leading-relaxed" data-aos="fade-right" data-aos-delay="200">
              Làng chài Nam Ô nằm ở cửa biển phía Bắc Đà Nẵng, nơi dòng biển Đông
              mang đến nguồn cá cơm tươi ngon quanh năm. Từ thế kỷ 18, nghề làm
              nước mắm đã trở thành linh hồn của làng, truyền từ đời này sang đời khác.
            </p>

            <p className="text-lg text-[#0B3D59]/80 mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="300">
              Mỗi giọt nước mắm Nam Ô không chỉ là gia vị, mà còn là câu chuyện
              về biển cả, về những người ngư dân chất phác, và về tình yêu với
              nghề truyền thống được giữ gìn qua ba trăm năm.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#0B3D59]/20">
              <div>
                <p className="text-3xl font-bold text-[#B5651D]">300+</p>
                <p className="text-sm text-[#0B3D59]/70">Năm Lịch Sử</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#B5651D]">12</p>
                <p className="text-sm text-[#0B3D59]/70">Tháng Ủ Tự Nhiên</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#B5651D]">100%</p>
                <p className="text-sm text-[#0B3D59]/70">Cá Cơm Tươi</p>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="relative bg-white/50 backdrop-blur-sm p-8 rounded-lg border-2 border-[#0B3D59]/10 shadow-xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C9A227] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#167E7E] rounded-full opacity-10"></div>

              <div className="relative space-y-6">
                <div className="flex gap-4 items-start p-6 bg-[#F8F5EF] rounded-lg border border-[#E6D5B8]" data-aos="fade-up" data-aos-delay="300">
                  <Anchor className="w-8 h-8 text-[#167E7E] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold text-[#0B3D59] mb-2">Nguồn Gốc Biển</h3>
                    <p className="text-sm text-[#0B3D59]/70 leading-relaxed">
                      Cá cơm được đánh bắt từ vùng biển trong lành Nam Ô,
                      nơi dòng nước lạnh gặp nước ấm tạo nên nguồn dinh dưỡng phong phú
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-[#F8F5EF] rounded-lg border border-[#E6D5B8]" data-aos="fade-up" data-aos-delay="400">
                  <Droplet className="w-8 h-8 text-[#167E7E] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold text-[#0B3D59] mb-2">Muối Biển Tinh Khiết</h3>
                    <p className="text-sm text-[#0B3D59]/70 leading-relaxed">
                      Chỉ sử dụng muối biển tự nhiên với tỷ lệ hoàn hảo 3:1,
                      giúp cá ủ đều và giữ trọn hương vị đặc trưng
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-[#F8F5EF] rounded-lg border border-[#E6D5B8]" data-aos="fade-up" data-aos-delay="500">
                  <Sun className="w-8 h-8 text-[#B5651D] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold text-[#0B3D59] mb-2">Nắng Gió Miền Trung</h3>
                    <p className="text-sm text-[#0B3D59]/70 leading-relaxed">
                      Quy trình ủ truyền thống trong chum vại gốm,
                      để nắng và gió biển kết tinh từng giọt nước mắm thơm ngon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
