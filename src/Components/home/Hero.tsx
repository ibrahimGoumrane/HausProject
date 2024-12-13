import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="grid grid-cols-[550px_minmax(890px,1fr)] px-6  section">
      <div className="flex h-full w-full items-center justify-center border-r-[4px] border-black-primary">
        <img src="assets/hero.png" alt="Modern office space" className="w-[470px] h-[624px] object-cover" />
      </div>
      <div className="flex flex-col justify-center pt-[300px] pl-[40px]">
        <h1 className="text-title-primary  font-medium mb-4 text-black-main">
          The place where we <span className="font-pinyon  ">grow</span>
        </h1>
        <p className="text-paragraph-secondary mb-6 text-black-main font-light max-w-[1200px]">
          Designed to be the pinnacle of productive environments. <span className="font-bold  f">Haus.</span> spaces
          combine <span>comfort</span>, <span>functionality</span>, and <span>inspiration</span> to elevate your
          productivity{' '}
        </p>
        <div className="w-[250px] h-[80px]  border-y-2 bg-black-primary text-white-secondary text-nav relative">
          <button className="gap-2 flex items-center justify-center w-full h-full">
            <span>Get Started</span>
            <ArrowRight className="h-8 w-8 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
