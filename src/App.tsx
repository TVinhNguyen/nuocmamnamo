import { useEffect, useState } from 'react';
import AOS from 'aos';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Products from './components/Products';
import Craft from './components/Craft';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import SEO from './components/SEO';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';

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
    <>
      <SEO />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="content" className="min-h-screen bg-[#F8F5EF]">
            <ScrollProgress />
            <Navigation />
            <Hero />
            <Heritage />
            <Products />
            <Craft />
            <Certifications />
            <Contact />
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
