import Hero from '../components/Hero';
import Heritage from '../components/Heritage';
import Products from '../components/Products';
import Craft from '../components/Craft';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5EF]">
      <Navigation />
      <Hero />
      <Heritage />
      <Products />
      <Craft />
      <Certifications />
      <Contact />
    </div>
  );
}
