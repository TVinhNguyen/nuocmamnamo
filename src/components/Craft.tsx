import { Clock, Thermometer, Package, CheckCircle } from 'lucide-react';

export default function Craft() {
  const steps = [
    {
      icon: Package,
      title: 'Chọn Lọc Cá Cơm',
      description: 'Cá cơm tươi được đánh bắt trong 24 giờ, chọn lọc kỹ càng theo tiêu chuẩn kích thước và độ tươi.',
      time: 'Ngày 1',
    },
    {
      icon: Thermometer,
      title: 'Phối Trộn Muối',
      description: 'Tỷ lệ cá:muối biển là 3:1, được trộn đều theo công thức gia truyền để cá ủ hoàn hảo.',
      time: 'Ngày 2-3',
    },
    {
      icon: Clock,
      title: 'Ủ Tự Nhiên 12 Tháng',
      description: 'Ủ trong chum vại gốm, để nắng gió biển kết tinh. Men vi sinh tự nhiên lên men tạo hương vị đặc trưng.',
      time: '12 Tháng',
    },
    {
      icon: CheckCircle,
      title: 'Lọc & Đóng Chai',
      description: 'Lọc nhiều lần qua vải bông, kiểm tra chất lượng nghiêm ngặt trước khi đóng chai thủy tinh.',
      time: 'Hoàn Tất',
    },
  ];

  return (
    <section id="craft" className="py-24 bg-[#0B3D59] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="waves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 Q25,5 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#167E7E]" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#waves)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#167E7E]/30 rounded-full mb-6" data-aos="fade-down">
            <span className="text-sm font-medium text-[#E6D5B8] tracking-widest">QUY TRÌNH CHẾ TÁC</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
            Nghệ Thuật Làm Nước Mắm
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Mỗi bước trong quy trình đều được thực hiện thủ công,
            giữ gìn nguyên bản tinh hoa truyền thống
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-aos="fade-up" data-aos-delay={index * 100}>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-[#167E7E]/30 -z-10"></div>
              )}

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-[#167E7E]/30 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#167E7E] rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-[#C9A227] bg-[#C9A227]/10 px-3 py-1 rounded-full">
                    {step.time}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#E6D5B8] rounded-lg p-8 md:p-12" data-aos="zoom-in" data-aos-delay="400">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#0B3D59] mb-4">
                Cam Kết Chất Lượng
              </h3>
              <p className="text-[#0B3D59]/80 leading-relaxed mb-4">
                Chúng tôi không sử dụng bất kỳ chất tạo màu, hóa chất bảo quản,
                hay phụ gia nào. Mỗi chai nước mắm đều trải qua kiểm tra nghiêm ngặt
                về hàm lượng đạm đạm, độ trong, màu sắc và hương vị.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-[#0B3D59]">
                  <CheckCircle className="w-5 h-5 text-[#167E7E]" />
                  <span className="font-medium">Không chất bảo quản</span>
                </div>
                <div className="flex items-center gap-2 text-[#0B3D59]">
                  <CheckCircle className="w-5 h-5 text-[#167E7E]" />
                  <span className="font-medium">Không hóa chất</span>
                </div>
                <div className="flex items-center gap-2 text-[#0B3D59]">
                  <CheckCircle className="w-5 h-5 text-[#167E7E]" />
                  <span className="font-medium">100% tự nhiên</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/80 p-6 rounded-lg border-l-4 border-[#167E7E]">
                <p className="text-sm text-[#0B3D59]/60 mb-1">Hàm Lượng Đạm</p>
                <p className="text-2xl font-bold text-[#0B3D59]">25-40°N</p>
              </div>
              <div className="bg-white/80 p-6 rounded-lg border-l-4 border-[#B5651D]">
                <p className="text-sm text-[#0B3D59]/60 mb-1">Thời Gian Ủ</p>
                <p className="text-2xl font-bold text-[#0B3D59]">12 Tháng</p>
              </div>
              <div className="bg-white/80 p-6 rounded-lg border-l-4 border-[#C9A227]">
                <p className="text-sm text-[#0B3D59]/60 mb-1">Nguồn Gốc</p>
                <p className="text-2xl font-bold text-[#0B3D59]">Nam Ô, Đà Nẵng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
