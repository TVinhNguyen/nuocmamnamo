import { Waves, Droplets, Award } from 'lucide-react';
import FloatingElement, { WaveDecoration, ParticleEffect } from './DecorativeElements';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5EF] via-[#E6D5B8]/30 to-[#F8F5EF]"></div>

      {/* Floating Elements */}
      <FloatingElement 
        className="w-96 h-96 bg-[#167E7E] top-20 right-10"
        duration={4}
        delay={0}
      />
      <FloatingElement 
        className="w-64 h-64 bg-[#C9A227] bottom-32 left-10"
        duration={5}
        delay={1}
      />
      <FloatingElement 
        className="w-48 h-48 bg-[#B5651D] top-1/3 left-1/4"
        duration={3.5}
        delay={0.5}
      />

      {/* Particle Effect */}
      <ParticleEffect />

      {/* Wave Decoration */}
      <WaveDecoration className="text-[#0B3D59]" />

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,40 50,50 T100,50 L100,100 L0,100 Z" fill="#0B3D59" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#167E7E]/10 rounded-full mb-8 border border-[#167E7E]/20" data-aos="fade-down">
          <Award className="w-4 h-4 text-[#C9A227]" />
          <span className="text-sm text-[#0B3D59] font-medium tracking-wide">300 NĂM TRUYỀN THỐNG LÀNG NGHỀ</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0B3D59] mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="100">
          Hương Vị Biển Cả
          <span className="block text-[#167E7E] mt-2">Từ Nam Ô</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#0B3D59]/70 mb-12 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Nước mắm truyền thống được ủ tự nhiên từ cá cơm tươi ngon,
          muối biển tinh khiết và ánh nắng Đà Nẵng
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="300">
          <a
            href="#products"
            className="px-8 py-4 bg-[#B5651D] text-white rounded-sm hover:shadow-2xl hover:ring-2 hover:ring-[#C9A227] transition-all duration-300 text-lg font-medium"
          >
            Khám Phá Sản Phẩm
          </a>
          <a
            href="#heritage"
            className="px-8 py-4 bg-transparent border-2 border-[#0B3D59] text-[#0B3D59] rounded-sm hover:bg-[#0B3D59] hover:text-white transition-all duration-300 text-lg font-medium"
          >
            Câu Chuyện Di Sản
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-[#E6D5B8] hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="400">
            <Waves className="w-12 h-12 text-[#167E7E] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-[#0B3D59] mb-2">100% Tự Nhiên</h3>
            <p className="text-[#0B3D59]/70">Không chất bảo quản, ủ truyền thống</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-[#E6D5B8] hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="500">
            <Droplets className="w-12 h-12 text-[#167E7E] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-[#0B3D59] mb-2">Cá Cơm Tươi</h3>
            <p className="text-[#0B3D59]/70">Đánh bắt tại vùng biển Nam Ô</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-[#E6D5B8] hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="600">
            <Award className="w-12 h-12 text-[#C9A227] mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-[#0B3D59] mb-2">Chứng Nhận OCOP</h3>
            <p className="text-[#0B3D59]/70">Sản phẩm 4 sao quốc gia</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F5EF] to-transparent"></div>
    </section>
  );
}
