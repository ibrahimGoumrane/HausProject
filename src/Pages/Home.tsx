import About from '../Components/home/About';
import Blog from '../Components/home/Blog';
import Contact from '../Components/home/Contact';
import FAQ from '../Components/home/FAQ';
import Features from '../Components/home/Features';
import Hero from '../Components/home/Hero';
import Testimonials from '../Components/home/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen bg-white ">
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
