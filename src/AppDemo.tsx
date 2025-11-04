import { useEffect } from 'react';
import AOS from 'aos';
import LibraryDemo from './components/LibraryDemo';
import SEO from './components/SEO';

/**
 * App Demo - Xem tất cả các thư viện hoạt động
 * 
 * Để chạy demo này:
 * 1. Đổi tên file này thành App.tsx (backup file App.tsx cũ trước)
 * 2. Hoặc import LibraryDemo vào App.tsx hiện tại
 * 
 * Để quay lại app chính:
 * - Restore lại file App.tsx gốc
 */

function AppDemo() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 50,
    });
  }, []);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-[#F8F5EF]">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-amber-600">
                Library Demo
              </h1>
              <nav className="flex gap-4">
                <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
                  Products
                </a>
                <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content - Library Demo */}
        <LibraryDemo />

        {/* Footer */}
        <footer className="bg-slate-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2025 Nước Mắm Nam Ô. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Demo các thư viện: AOS, Swiper, Lucide, Framer Motion
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default AppDemo;
