import { Anchor, Sun, Droplet, BookOpen, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Heritage() {
  const [showStory, setShowStory] = useState(false);

  return (
    <section id="heritage" className="py-24 bg-[#E6D5B8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!showStory ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
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

            <div className="grid grid-cols-3 gap-4 pt-6 mb-8 border-t border-[#0B3D59]/20">
              <div>
                <p className="text-3xl font-bold text-[#B5651D]">400+</p>
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

            {/* Nút Xem Chi Tiết */}
            <motion.button
              onClick={() => setShowStory(true)}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#167E7E] to-[#0B3D59] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <BookOpen className="w-5 h-5" />
              <span>Khám Phá Câu Chuyện</span>
              <motion.span
                className="ml-1"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>
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
            </motion.div>
          ) : (
            // DẠNG CÂU CHUYỆN CHI TIẾT
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Nút Đóng */}
              <motion.button
                onClick={() => setShowStory(false)}
                className="absolute top-0 right-0 z-10 flex items-center gap-2 px-6 py-3 bg-[#0B3D59] text-white rounded-full font-medium shadow-lg hover:bg-[#167E7E] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
                <span>Đóng</span>
              </motion.button>

              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-1.5 bg-[#C9A227]/20 rounded-full mb-6">
                    <span className="text-sm font-medium text-[#B5651D] tracking-widest">CÂU CHUYỆN TRUYỀN THỐNG</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D59] mb-4 leading-tight">
                    Hương Làng Cổ
                    <span className="block text-[#167E7E]">Kết Tinh Di Sản</span>
                  </h2>
                </div>

                {/* Story Content */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-[#0B3D59]/10">
                  <div className="prose prose-lg max-w-none">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-6 text-[#0B3D59]/90 leading-relaxed"
                    >
                      <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-[#B5651D] first-letter:mr-2 first-letter:float-left">
                        Mỗi buổi sớm ở làng chài Nam Ô (Đà Nẵng), hương mặn mòi của biển cả quyện với mùi cá cơm tươi và muối trắng. Tất cả tạo nên một mùi hương quen thuộc – thứ hương vị quê nhà khiến ai xa quê cũng bồi hồi nhớ về. Làng Nam Ô, nép mình dưới chân đèo Hải Vân, đã hơn <strong className="text-[#B5651D]">400 năm</strong> gắn bó với nghề làm nước mắm truyền thống. Trải qua bao thăng trầm, nước mắm nơi đây không chỉ là một thức chấm mà còn là kết tinh văn hóa và ký ức miền Trung – những giọt mắm nhĩ đậm đà từng được chọn làm <strong className="text-[#167E7E]">sản vật tiến Vua</strong>.
                      </p>

                      <div className="bg-[#F8F5EF] p-6 rounded-lg border-l-4 border-[#C9A227]">
                        <p className="text-lg italic text-[#0B3D59]/80">
                          "Năm 2019, nghề làm mắm Nam Ô được công nhận là <strong className="text-[#B5651D] not-italic">Di sản văn hóa phi vật thể quốc gia</strong> – một niềm tự hào mà thương hiệu Hương Làng Cổ luôn gắn bó và phát huy."
                        </p>
                      </div>

                      <p className="text-lg leading-relaxed">
                        Được sinh ra từ chính làng mắm trăm năm ấy, <strong className="text-[#167E7E]">Hương Làng Cổ</strong> tự hào tiếp nối truyền thống cha ông với tất cả tâm huyết và sự mộc mạc chân thành. Trải qua <strong className="text-[#B5651D]">bốn thế hệ</strong> gìn giữ nghề cổ truyền, Hương Làng Cổ vẫn miệt mài ủ từng chum mắm theo phương pháp xưa.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-gradient-to-br from-[#167E7E]/10 to-[#0B3D59]/10 p-6 rounded-lg border border-[#167E7E]/20">
                          <h3 className="text-xl font-bold text-[#167E7E] mb-3 flex items-center gap-2">
                            <Anchor className="w-6 h-6" />
                            Nguyên Liệu Tinh Túy
                          </h3>
                          <p className="text-[#0B3D59]/80 leading-relaxed">
                            Chỉ gồm <strong>cá cơm than tươi</strong> đầu mùa xuân (tháng 3 âm lịch) và muối biển sạch, theo bí quyết <strong className="text-[#B5651D]">ba phần cá một phần muối</strong>.
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#C9A227]/10 to-[#B5651D]/10 p-6 rounded-lg border border-[#C9A227]/20">
                          <h3 className="text-xl font-bold text-[#B5651D] mb-3 flex items-center gap-2">
                            <Sun className="w-6 h-6" />
                            Quy Trình Truyền Thống
                          </h3>
                          <p className="text-[#0B3D59]/80 leading-relaxed">
                            Ủ chượp trong các lu sành <strong>hơn mười hai tháng</strong> trời nắng gió. Mọi công đoạn đều làm thủ công, để thời gian và thiên nhiên chắt lọc.
                          </p>
                        </div>
                      </div>

                      <p className="text-lg leading-relaxed">
                        Cá và muối được ướp ngay khi vừa đánh bắt, rồi tất cả được ủ chượp trong các lu sành hơn mười hai tháng trời nắng gió. Mọi công đoạn đều làm thủ công, để thời gian và thiên nhiên chắt lọc nên dòng <strong className="text-[#167E7E]">nước mắm nhĩ tinh khiết</strong>, màu nâu hổ phách óng ả và mùi thơm ngọt dịu hoàn toàn tự nhiên. Suốt quá trình dài ấy, Hương Làng Cổ <strong className="text-[#B5651D]">tuyệt đối không thêm bất kỳ phụ gia hay hương liệu nào</strong>, giữ trọn vẹn tinh túy nguyên sơ của cá và muối trong từng giọt mắm.
                      </p>

                      <div className="bg-gradient-to-r from-[#167E7E]/5 via-[#C9A227]/5 to-[#B5651D]/5 p-8 rounded-lg border-2 border-[#0B3D59]/10 my-8">
                        <p className="text-xl leading-relaxed text-center text-[#0B3D59] font-medium">
                          "Ngày nay, Hương Làng Cổ mang theo hương vị truyền thống Nam Ô ấy đến với mâm cơm của mọi gia đình. Mỗi giọt nước mắm Hương Làng Cổ không chỉ đậm đà vị ngon tự nhiên mà còn chứa đựng tình yêu nghề và niềm tự hào xứ Quảng."
                        </p>
                      </div>

                      <p className="text-lg leading-relaxed">
                        Trong nhịp sống hiện đại, thương hiệu vẫn giữ nguyên chất mộc mạc của làng nghề xưa, đồng thời đảm bảo quy trình sạch và an toàn để người dùng yên tâm thưởng thức. Chúng tôi tin rằng khi chọn <strong className="text-[#167E7E]">Hương Làng Cổ</strong>, bạn không chỉ chọn một chai nước mắm nguyên chất, mà còn chọn cả một câu chuyện truyền thống – một <strong className="text-[#B5651D]">di sản quý giá của quê hương</strong>.
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t-2 border-[#0B3D59]/20">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-[#B5651D] mb-2">400+</div>
                          <div className="text-sm text-[#0B3D59]/70 uppercase tracking-wider">Năm Truyền Thống</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-[#167E7E] mb-2">4</div>
                          <div className="text-sm text-[#0B3D59]/70 uppercase tracking-wider">Thế Hệ Gìn Giữ</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-[#C9A227] mb-2">12</div>
                          <div className="text-sm text-[#0B3D59]/70 uppercase tracking-wider">Tháng Ủ Tự Nhiên</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-[#B5651D] mb-2">100%</div>
                          <div className="text-sm text-[#0B3D59]/70 uppercase tracking-wider">Nguyên Chất</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Nút Quay Lại */}
                <div className="text-center mt-8">
                  <motion.button
                    onClick={() => setShowStory(false)}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-[#0B3D59] rounded-full font-semibold border-2 border-[#0B3D59]/20 hover:bg-white hover:border-[#0B3D59] transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>←</span>
                    <span>Quay Lại Tổng Quan</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
