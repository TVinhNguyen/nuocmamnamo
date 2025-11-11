import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { items } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Trang Chủ', href: '/', isRoute: true },
    { name: 'Cửa Hàng', href: '/shop', isRoute: true },
    { name: 'Di Sản', href: '#heritage', isRoute: false },
    { name: 'Sản Phẩm', href: '#products', isRoute: false },
    { name: 'Nghề Làm', href: '#craft', isRoute: false },
    { name: 'Liên Hệ', href: '#contact', isRoute: false },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-[#E6D5B8]' 
        : 'bg-[#F8F5EF]/95 backdrop-blur-sm border-[#E6D5B8]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/imgs/logo.png" alt="Hương Làng Cổ" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-[#0B3D59] tracking-tight">Hương Làng Cổ</h1>
              <p className="text-xs text-[#167E7E] tracking-widest">NƯỚC MẮM NAM Ô</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => {
              // Chỉ hiển thị các link anchor khi ở trang chủ
              if (!link.isRoute && !isHomePage) return null;
              
              return link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-[#0B3D59] hover:text-[#167E7E] transition-colors duration-300 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#167E7E] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-[#0B3D59] hover:text-[#167E7E] transition-colors duration-300 font-medium relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#167E7E] group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              );
            })}
            
            <Link
              to="/shop"
              className="relative px-6 py-2.5 bg-[#B5651D] text-white rounded-full hover:shadow-lg hover:ring-2 hover:ring-[#C9A227] transition-all duration-300 font-medium flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Mua Ngay</span>
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#0B3D59]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden pb-6 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => {
                if (!link.isRoute && !isHomePage) return null;
                
                return link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-[#0B3D59] hover:text-[#167E7E] transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-[#0B3D59] hover:text-[#167E7E] transition-colors font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-2.5 bg-[#B5651D] text-white rounded-full font-medium relative"
              >
                <span className="flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Mua Ngay
                  {items.length > 0 && (
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {items.length}
                    </span>
                  )}
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
