import { useState } from 'react';
import { Search, Filter, ChevronDown, ShoppingCart, X } from 'lucide-react';
import Navigation from '../components/Navigation';
import ProductDetails from '../components/ProductDetails';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  const categories = [
    { id: 'all', name: 'Tất Cả' },
    { id: 'premium', name: 'Premium' },
    { id: 'standard', name: 'Tiêu Chuẩn' },
    { id: 'economy', name: 'Phổ Thông' },
    { id: 'specialty', name: 'Đặc Sản' },
    { id: 'gift', name: 'Quà Tặng' },
  ];

  const filtered = PRODUCTS.filter((product) => {
    const matchSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-[#F8F5EF]">
      <Navigation />

      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B3D59] mb-4">Cửa Hàng Nước Mắm Nam Ô</h1>
            <p className="text-lg text-[#0B3D59]/70">Khám phá toàn bộ bộ sưu tập sản phẩm chất lượng cao từ làng nghề Nam Ô</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              <div className="flex-1 relative w-full">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-[#0B3D59]/40" />
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-[#E6D5B8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#167E7E]"
                />
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#E6D5B8] rounded-lg">
                  <Filter className="w-5 h-5 text-[#0B3D59]" />
                  <span className="text-sm font-medium text-[#0B3D59]">{sorted.length} sản phẩm</span>
                </div>

                <div className="relative">
                  <button 
                    onClick={() => setShowSortMenu(!showSortMenu)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E6D5B8] rounded-lg hover:bg-[#F8F5EF] transition-colors"
                  >
                    <span className="text-sm font-medium text-[#0B3D59]">
                      {sortBy === 'popular'
                        ? 'Phổ Biến'
                        : sortBy === 'price-low'
                          ? 'Giá Thấp'
                          : sortBy === 'price-high'
                            ? 'Giá Cao'
                            : 'Đánh Giá'}
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#0B3D59]" />
                  </button>

                  <AnimatePresence>
                    {showSortMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full right-0 mt-2 w-48 bg-white border border-[#E6D5B8] rounded-lg shadow-lg z-10"
                      >
                        <button
                          onClick={() => { setSortBy('popular'); setShowSortMenu(false); }}
                          className="w-full text-left px-4 py-2 hover:bg-[#E6D5B8] text-sm text-[#0B3D59] rounded-t-lg"
                        >
                          Phổ Biến
                        </button>
                        <button
                          onClick={() => { setSortBy('price-low'); setShowSortMenu(false); }}
                          className="w-full text-left px-4 py-2 hover:bg-[#E6D5B8] text-sm text-[#0B3D59]"
                        >
                          Giá Thấp
                        </button>
                        <button
                          onClick={() => { setSortBy('price-high'); setShowSortMenu(false); }}
                          className="w-full text-left px-4 py-2 hover:bg-[#E6D5B8] text-sm text-[#0B3D59]"
                        >
                          Giá Cao
                        </button>
                        <button
                          onClick={() => { setSortBy('rating'); setShowSortMenu(false); }}
                          className="w-full text-left px-4 py-2 hover:bg-[#E6D5B8] text-sm text-[#0B3D59] rounded-b-lg"
                        >
                          Đánh Giá
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#167E7E] text-white'
                      : 'bg-[#E6D5B8] text-[#0B3D59] hover:bg-[#D4C5A8]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sorted.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg border border-[#E6D5B8] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="bg-gradient-to-br from-[#E6D5B8] to-[#F8F5EF] h-48 flex items-center justify-center relative overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#167E7E]">{product.grade}</div>
                    </div>
                  )}
                  {product.category === 'premium' && (
                    <div className="absolute top-4 right-4 bg-[#C9A227] text-white px-3 py-1 rounded-full text-xs font-bold">
                      CAO CẤP
                    </div>
                  )}
                  {product.category === 'specialty' && (
                    <div className="absolute top-4 right-4 bg-[#B5651D] text-white px-3 py-1 rounded-full text-xs font-bold">
                      ĐẶC SẢN
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0B3D59] mb-2 line-clamp-2">{product.name}</h3>

                  <p className="text-sm text-[#0B3D59]/70 mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
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
                    <span className="text-xs text-[#0B3D59]/60">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#B5651D]">
                      {product.price.toLocaleString('vi-VN')}đ
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                      className="p-2 bg-[#167E7E] text-white rounded-lg hover:bg-[#0B3D59] transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {sorted.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[#0B3D59]/70">Không tìm thấy sản phẩm phù hợp</p>
            </div>
          )}
        </div>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>

      {/* Floating Cart Button */}
      {items.length > 0 && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowCart(true)}
          className="fixed bottom-8 right-8 bg-[#B5651D] text-white rounded-full p-4 shadow-xl flex items-center justify-center w-16 h-16 hover:shadow-2xl transition-shadow z-40"
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-[#E85D3F] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {items.length}
            </span>
          </div>
        </motion.button>
      )}

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowCart(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#E6D5B8]">
                <h2 className="text-2xl font-bold text-[#0B3D59]">Giỏ Hàng ({items.length})</h2>
                <button onClick={() => setShowCart(false)} className="text-[#0B3D59]/60 hover:text-[#0B3D59]">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-[#F8F5EF] rounded-lg">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gradient-to-br from-[#E6D5B8] to-[#F8F5EF] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-[#167E7E]">{item.grade}</span>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0B3D59] mb-1">{item.name}</h3>
                      <p className="text-sm text-[#B5651D] font-semibold mb-2">{item.price.toLocaleString('vi-VN')}đ</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center bg-white border border-[#E6D5B8] rounded text-[#0B3D59] hover:bg-[#E6D5B8]"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold text-[#0B3D59]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center bg-white border border-[#E6D5B8] rounded text-[#0B3D59] hover:bg-[#E6D5B8]"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-red-600 hover:text-red-700 text-sm"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-[#E6D5B8]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-[#0B3D59]">Tổng cộng:</span>
                  <span className="text-2xl font-bold text-[#B5651D]">{total.toLocaleString('vi-VN')}đ</span>
                </div>
                <button
                  onClick={() => {
                    setShowCheckoutSuccess(true);
                    setShowCart(false);
                    setTimeout(() => {
                      clearCart();
                      setShowCheckoutSuccess(false);
                    }, 3000);
                  }}
                  className="block w-full py-4 bg-[#B5651D] text-white text-center rounded-lg font-semibold hover:bg-[#167E7E] transition-colors"
                >
                  Thanh Toán
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Success Modal */}
      <AnimatePresence>
        {showCheckoutSuccess && (
          <>
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
                <h3 className="text-2xl font-bold text-[#0B3D59] mb-3">Cảm ơn bạn đã đặt hàng!</h3>
                <p className="text-[#0B3D59]/70 mb-2">Đơn hàng của bạn đã được xác nhận</p>
                <p className="text-sm text-[#0B3D59]/60">Chúng tôi sẽ liên hệ với bạn sớm nhất</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
