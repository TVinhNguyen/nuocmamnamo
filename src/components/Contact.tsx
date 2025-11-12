import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };
  return (
    <section id="contact" className="py-24 bg-[#0B3D59] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#167E7E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#167E7E]/30 rounded-full mb-6" data-aos="fade-right">
              <span className="text-sm font-medium text-[#E6D5B8] tracking-widest">LIÊN HỆ</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" data-aos="fade-right" data-aos-delay="100">
              Hãy Để Chúng Tôi
              <span className="block text-[#C9A227]">Phục Vụ Bạn</span>
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="200">
              Dù bạn là khách hàng cá nhân hay đại lý phân phối,
              chúng tôi luôn sẵn sàng tư vấn và hỗ trợ.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start" data-aos="fade-right" data-aos-delay="300">
                <div className="w-12 h-12 bg-[#167E7E] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Hotline</p>
                  <a href="tel:0236123456" className="text-white text-lg font-bold hover:text-[#C9A227] transition-colors">
                    0236 123 456
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start" data-aos="fade-right" data-aos-delay="400">
                <div className="w-12 h-12 bg-[#167E7E] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Email</p>
                  <a href="mailto:info@nuocmamnamo.vn" className="text-white text-lg font-bold hover:text-[#C9A227] transition-colors">
                    info@nuocmamnamo.vn
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start" data-aos="fade-right" data-aos-delay="500">
                <div className="w-12 h-12 bg-[#167E7E] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Địa Chỉ</p>
                  <p className="text-white text-lg font-bold">
                    Làng chài Nam Ô, Hòa Hiệp Bắc
                    <span className="block">Quận Liên Chiểu, Đà Nẵng</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-white/60 mb-4">Kết nối với chúng tôi</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 hover:bg-[#167E7E] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 hover:bg-[#167E7E] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-[#167E7E]/30" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-2xl font-bold text-white mb-6">Gửi Tin Nhắn</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                  Họ và Tên
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white/80 mb-2 text-sm">
                  Số Điện Thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                  placeholder="0901 234 567"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                  Nội Dung
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all resize-none"
                  placeholder="Cho chúng tôi biết bạn cần gì..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#B5651D] text-white rounded-xl hover:shadow-2xl hover:ring-2 hover:ring-[#C9A227] transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Nước Mắm Nam Ô. Sản phẩm của làng nghề truyền thống Đà Nẵng.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Giấy phép ATTP số: 123/2024/ATTP-DN | OCOP 4 Sao
          </p>
        </div>
      </div>

      {/* Contact Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B3D59] mb-3">Cảm ơn bạn đã liên hệ!</h3>
              <p className="text-[#0B3D59]/70 mb-2">Tin nhắn của bạn đã được gửi thành công</p>
              <p className="text-sm text-[#0B3D59]/60">Chúng tôi sẽ phản hồi bạn sớm nhất có thể</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
