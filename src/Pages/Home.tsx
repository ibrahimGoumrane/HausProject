import About from '../Components/home/About';
import Blog from '../Components/home/Blog';
import Contact from '../Components/home/Contact';
import FAQ from '../Components/home/FAQ';
import Features from '../Components/home/Features';
import Hero from '../Components/home/Hero';
import Testimonials from '../Components/home/Testimonials';
import LocationMarquee from '../Components/home/LocationMarquee';
import SubSection from '../Layout/subSectionLayout';
import { locations } from '../Data/locations';
import Navbar from '../Components/Navbar';
import { useTranslation } from 'react-i18next';
import lngs from '../I18n/lngs';
import i18next from 'i18next';
const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <Hero />
        <LocationMarquee locations={locations} />
        <SubSection animationType="left-to-right" observeOnce={true}>
          <About />
        </SubSection>
        <SubSection animationType="left-to-right" observeOnce={true}>
          <Features />
        </SubSection>
        <SubSection animationType="left-to-right" observeOnce={true}>
          <Testimonials />
        </SubSection>
        <SubSection animationType="left-to-right" observeOnce={true}>
          <Blog />
        </SubSection>
        <SubSection animationType="left-to-right" observeOnce={true}>
          <FAQ />
        </SubSection>
        <SubSection animationType="left-to-right" observeOnce={true}>
          <Contact />
        </SubSection>
        <div className="hs-dropdown [--placement:top-left] fixed bottom-6 right-6 inline-flex z-50">
          <button
            id="hs-dropup"
            type="button"
            className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-black-primary bg-white text-black-primary shadow-sm hover:bg-white-primary focus:outline-none focus:bg-white-primary disabled:opacity-50 disabled:pointer-events-none "
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <svg
              className="hs-dropdown-open:rotate-180 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m18 15-6-6-6 6"></path>
            </svg>
            {i18next.resolvedLanguage}
          </button>

          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white-primary border-2 border-black-primary shadow-md mt-2 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-dropup"
          >
            <div className="">
              {/* <button className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ">
                Newsletter
              </button> */}
              {lngs.map((lng) => (
                <button
                  key={lng.name}
                  onClick={() => i18next.changeLanguage(lng.name)}
                  className="flex w-full items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-black-primary hover:text-white-primary focus:outline-none "
                >
                  {lng.flag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
