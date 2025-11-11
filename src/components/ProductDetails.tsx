import { useState } from 'react';
import { X, Plus, Minus, Heart, Share2, Truck, Clock, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  grade: string;
  price: number;
  description: string;
  fullDescription: string;
  category: string;
  images?: string[];
  specifications: {
    volume: string;
    protein: string;
    shelf: string;
    origin: string;
  };
  highlights: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetails({ product, onClose }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        grade: product.grade,
        price: product.price,
      });
    }
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
          <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 border-b border-[#E6D5B8]">
            <h2 className="text-2xl font-bold text-[#0B3D59] line-clamp-1">{product.name}</h2>
            <button
              onClick={onClose}
              className="text-[#0B3D59]/60 hover:text-[#0B3D59] transition-colors flex-shrink-0 ml-4"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              {/* Main Image */}
              <div className="bg-gradient-to-br from-[#E6D5B8] to-[#F8F5EF] rounded-lg overflow-hidden mb-4">
                {product.images && product.images.length > 0 ? (
                  <img 
                    src={product.images[currentImageIndex]} 
                    alt={product.name}
                    className="w-full h-96 object-contain p-8"
                  />
                ) : (
                  <div className="h-96 flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-[#167E7E] mb-2">
                        {product.grade}
                      </div>
                      <p className="text-[#0B3D59]/70 font-medium">Sản Phẩm</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-1 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index 
                          ? 'border-[#167E7E] ring-2 ring-[#167E7E]/30' 
                          : 'border-[#E6D5B8] hover:border-[#167E7E]/50'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  {product.category === 'premium' && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A227]/10 rounded-full mb-3">
                      <span className="text-sm font-bold text-[#C9A227]">CAO CẤP</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-[#C9A227] fill-current'
                              : 'text-[#E6D5B8]'
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-[#0B3D59]/70">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-2 rounded-full transition-all flex-shrink-0 ${
                    isWishlisted
                      ? 'bg-red-100 text-red-600'
                      : 'bg-[#E6D5B8] text-[#0B3D59]/60 hover:text-[#0B3D59]'
                  }`}
                >
                  <Heart className="w-4 h-4" fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-[#B5651D] mb-1">
                  {product.price.toLocaleString('vi-VN')}đ
                </div>
                <p className="text-xs text-[#0B3D59]/70">Giá đã bao gồm VAT</p>
              </div>

              <div className="mb-4">
                <p className={`text-sm text-[#0B3D59]/80 leading-relaxed ${!showFullDescription ? 'line-clamp-3' : ''}`}>
                  {product.fullDescription}
                </p>
                {product.fullDescription.length > 150 && (
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-xs text-[#167E7E] hover:text-[#0B3D59] font-medium mt-2"
                  >
                    {showFullDescription ? '← Thu gọn' : 'Xem thêm →'}
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-[#E6D5B8]">
                <div>
                  <p className="text-xs text-[#0B3D59]/60 mb-1">Dung Tích</p>
                  <p className="font-semibold text-sm text-[#0B3D59]">{product.specifications.volume}</p>
                </div>
                <div>
                  <p className="text-xs text-[#0B3D59]/60 mb-1">Độ Đạm</p>
                  <p className="font-semibold text-sm text-[#0B3D59]">{product.specifications.protein}</p>
                </div>
                <div>
                  <p className="text-xs text-[#0B3D59]/60 mb-1">Hạn Dùng</p>
                  <p className="font-semibold text-sm text-[#0B3D59]">{product.specifications.shelf}</p>
                </div>
                <div>
                  <p className="text-xs text-[#0B3D59]/60 mb-1">Xuất Xứ</p>
                  <p className="font-semibold text-sm text-[#0B3D59]">{product.specifications.origin}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="space-y-2">
                  {product.highlights.slice(0, showAllHighlights ? undefined : 2).map((highlight, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <div className="w-4 h-4 bg-[#167E7E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-[#0B3D59]">{highlight}</span>
                    </div>
                  ))}
                </div>
                {product.highlights.length > 2 && (
                  <button
                    onClick={() => setShowAllHighlights(!showAllHighlights)}
                    className="text-xs text-[#167E7E] hover:text-[#0B3D59] font-medium mt-2 ml-6"
                  >
                    {showAllHighlights ? '← Thu gọn' : `Xem thêm ${product.highlights.length - 2} điểm nổi bật →`}
                  </button>
                )}
              </div>

              <div className="flex gap-3 mb-4">
                <div className="flex border border-[#E6D5B8] rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-[#0B3D59] hover:bg-[#E6D5B8] transition-colors rounded-l-lg"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="px-4 py-2 border-l border-r border-[#E6D5B8] flex items-center justify-center text-[#0B3D59] font-bold min-w-12">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-[#0B3D59] hover:bg-[#E6D5B8] transition-colors rounded-r-lg"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 px-6 py-2 bg-[#B5651D] text-white rounded-lg hover:shadow-lg hover:ring-2 hover:ring-[#C9A227] transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Thêm Vào Giỏ
                </button>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex gap-2 items-center text-xs text-[#0B3D59]/70">
                  <Truck className="w-4 h-4 text-[#167E7E] flex-shrink-0" />
                  <span>Miễn phí ship đơn từ 1 triệu</span>
                </div>
                <div className="flex gap-2 items-center text-xs text-[#0B3D59]/70">
                  <Clock className="w-4 h-4 text-[#167E7E] flex-shrink-0" />
                  <span>Giao 2-3 ngày ĐN, 3-5 ngày toàn quốc</span>
                </div>
                <div className="flex gap-2 items-center text-xs text-[#0B3D59]/70">
                  <Shield className="w-4 h-4 text-[#167E7E] flex-shrink-0" />
                  <span>Hoàn tiền 100% nếu không hài lòng</span>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 text-[#167E7E] hover:text-[#0B3D59] transition-colors py-2 text-sm">
                <Share2 className="w-4 h-4" />
                Chia Sẻ
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl z-[60] flex items-center gap-3"
          >
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Đã thêm vào giỏ hàng!</p>
              <p className="text-sm opacity-90">{quantity}x {product.name}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
