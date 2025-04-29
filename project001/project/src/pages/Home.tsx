import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ServiceHighlights from '../components/home/ServiceHighlights';
import FeaturedProduct from '../components/home/FeaturedProduct';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'TechSolve | Enterprise Software Solutions';
  }, []);

  return (
    <main>
      <Hero />
      <ServiceHighlights />
      <FeaturedProduct />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Home;