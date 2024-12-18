import About from '../Components/home/About';
import Blog from '../Components/home/Blog';
import Contact from '../Components/home/Contact';
import FAQ from '../Components/home/FAQ';
import Features from '../Components/home/Features';
import Hero from '../Components/home/Hero';
import Testimonials from '../Components/home/Testimonials';
import LocationMarquee from '../Components/home/LocationMarquee';
import SubSection from '../Layout/subSectionLayout';
import locations from '../Data/locations';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <LocationMarquee locations={locations} />
      <SubSection animationType="top-to-bottom" observeOnce={true}>
        <About />
      </SubSection>
      <SubSection animationType="left-to-right" observeOnce={true}>
        <Features />
      </SubSection>
      <SubSection animationType="top-to-bottom" observeOnce={true}>
        <Testimonials />
      </SubSection>
      <SubSection animationType="left-to-right" observeOnce={true}>
        <Blog />
      </SubSection>
      <FAQ />
      <SubSection animationType="left-to-right" observeOnce={true}>
        <Contact />
      </SubSection>
    </div>
  );
};

export default Home;
