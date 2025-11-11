import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SEO from './components/SEO';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import { CartProvider } from './context/CartContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 50,
    });

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <Router>
        <SEO />
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loading" />
          ) : (
            <div key="content" className="min-h-screen bg-[#F8F5EF]">
              <ScrollProgress />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
              </Routes>
              <ScrollToTop />
            </div>
          )}
        </AnimatePresence>
      </Router>
    </CartProvider>
  );
}

export default App;
