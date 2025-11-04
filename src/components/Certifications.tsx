import { Award, Shield, Leaf, Star } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      icon: Award,
      title: 'OCOP 4 Sao',
      description: 'Chứng nhận sản phẩm OCOP cấp quốc gia 4 sao',
      color: 'text-[#C9A227]',
      bgColor: 'bg-[#C9A227]/10',
    },
    {
      icon: Shield,
      title: 'ATTP',
      description: 'Giấy chứng nhận an toàn thực phẩm',
      color: 'text-[#167E7E]',
      bgColor: 'bg-[#167E7E]/10',
    },
    {
      icon: Leaf,
      title: 'Sản Phẩm Xanh',
      description: 'Quy trình sản xuất thân thiện môi trường',
      color: 'text-[#167E7E]',
      bgColor: 'bg-[#167E7E]/10',
    },
    {
      icon: Star,
      title: 'Top 100',
      description: 'Top 100 sản phẩm tiêu biểu Đà Nẵng',
      color: 'text-[#C9A227]',
      bgColor: 'bg-[#C9A227]/10',
    },
  ];

  const testimonials = [
    {
      quote: 'Hương vị đậm đà, trong trẻo như chính biển Nam Ô. Gia đình tôi đã dùng nước mắm này hơn 20 năm và chưa bao giờ muốn đổi.',
      author: 'Chị Lan Anh',
      location: 'Hà Nội',
    },
    {
      quote: 'Nhà hàng chúng tôi chỉ tin dùng nước mắm Nam Ô. Khách hàng luôn khen ngợi vị ngọt tự nhiên và mùi thơm đặc trưng.',
      author: 'Anh Minh Tuấn',
      location: 'Chủ Nhà Hàng Hải Sản',
    },
    {
      quote: 'Là người Đà Nẵng xa quê, mỗi lần được ăn món chấm nước mắm Nam Ô là tôi lại nhớ về biển, về làng.',
      author: 'Chị Phương',
      location: 'Sài Gòn',
    },
  ];

  return (
    <section className="py-24 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#C9A227]/10 rounded-full mb-6" data-aos="fade-down">
            <span className="text-sm font-medium text-[#B5651D] tracking-widest">CHỨNG NHẬN & TIN CẬY</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D59] mb-6" data-aos="fade-up">
            Chất Lượng Được Công Nhận
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-[#E6D5B8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className={`w-16 h-16 ${cert.bgColor} rounded-full flex items-center justify-center mb-4`}>
                <cert.icon className={`w-8 h-8 ${cert.color}`} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#0B3D59] mb-2">{cert.title}</h3>
              <p className="text-sm text-[#0B3D59]/70">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#E6D5B8] rounded-lg p-8 md:p-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-bold text-[#0B3D59] mb-12 text-center">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-[#0B3D59]/10 hover:border-[#167E7E] transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#C9A227] fill-current"
                    />
                  ))}
                </div>

                <p className="text-[#0B3D59] mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-[#E6D5B8] pt-4">
                  <p className="font-bold text-[#0B3D59]">{testimonial.author}</p>
                  <p className="text-sm text-[#0B3D59]/60">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#0B3D59] to-[#167E7E] rounded-lg p-8 md:p-12 text-center text-white" data-aos="zoom-in" data-aos-delay="400">
          <h3 className="text-3xl font-bold mb-4">Cam Kết Hoàn Tiền 100%</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
            Nếu bạn không hoàn toàn hài lòng với sản phẩm, chúng tôi sẽ hoàn trả
            toàn bộ chi phí trong vòng 30 ngày. Đó là sự tự tin về chất lượng của chúng tôi.
          </p>
          <div className="inline-flex items-center gap-2">
            <Shield className="w-6 h-6" />
            <span className="font-bold">Bảo Hành Chất Lượng</span>
          </div>
        </div>
      </div>
    </section>
  );
}
