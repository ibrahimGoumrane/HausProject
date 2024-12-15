import { ArrowRight } from 'lucide-react';
import SvgHero from './SvgHero';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <SvgHero />
      <div className="grid  lg:grid-cols-[1fr_550px] grid-cols-1 xl:grid-cols-[550px_1fr] section relative">
        <div className="flex h-full w-full items-center justify-center border-l-[2px] xl:border-r-[2px] border-black-primary xl:col-start-1 absolute lg:static inset-0  lg:col-start-2 ">
          <img
            src="assets/hero.png"
            alt="Modern office space"
            className="xl:w-[470px] xl:h-[624px] lg:w-[400px] backdrop-blur-sm lg:backdrop-blur-none object-contain w-full  lg:object-cover"
          />
        </div>
        <div className="flex items-end lg:items-start  lg:justify-start xl:col-start-2 col-start-1   row-start-1">
          <div className="flex flex-col gap-5 xl:justify-center xl:pt-[250px] z-10 items-start xl:pl-[40px] pl-[10px] xl:max-w-[750px] lg:max-w-[500px]  max-h-[800px] bg-white-primary p-10 lg:pr-0 rounded-md w-screen     ">
            <h1 className="xl:text-title-primary lg:text-title-secondary text-title-primary  font-semibold text-black-main">
              The place where we{' '}
              <span className="font-pinyon xl:text-title-pinyonScript text-title-pinyonScript lg:text-title-secondary font-medium">
                grow
              </span>
            </h1>
            <p className="xl:text-paragraph-primary text-paragraph-primary lg:text-paragraph-secondary  mb-2 text-black-main font-normal">
              Designed to be the pinnacle of productive environments.
              <br /> <span className="font-bold">Haus.</span> spaces combine{' '}
              <span className="font-medium">comfort</span>,<span className="font-medium">functionality</span>, and{' '}
              <span className="font-medium">inspiration</span> to elevate your productivity{' '}
            </p>
            <div className="w-[250px] h-[80px] font-normal border-y-2 bg-black-primary text-white-secondary text-paragraph-primary relative  self-start">
              <button className="gap-2 flex items-center justify-center w-full h-full">
                <span>Get Started</span>
                <ArrowRight className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
