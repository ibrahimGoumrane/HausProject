import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-[550px_minmax(890px,1fr)] px-6  section ">
        <div className="flex h-full w-full items-center justify-center border-r-[2px] border-black-primary">
          <img src="assets/hero.png" alt="Modern office space" className="w-[470px] h-[624px] object-cover" />
        </div>
        <div className="flex flex-col justify-center pt-[250px] pl-[40px] max-w-[802px] ">
          <h1 className="text-title-primary  font-semibold  text-black-main">
            The place where we <span className="font-pinyon text-title-pinyonScript font-medium  ">grow</span>
          </h1>
          <p className="text-paragraph-primary  mb-2 text-black-main font-normal   ">
            Designed to be the pinnacle of productive environments.
            <br /> <span className="font-bold ">Haus.</span> spaces combine <span className="font-medium">comfort</span>
            , <span className="font-medium">functionality</span>, and <span className="font-medium">inspiration</span>{' '}
            to elevate your productivity{' '}
          </p>
          <div className="w-[250px] h-[80px] font-normal  border-y-2 bg-black-primary text-white-secondary text-paragraph-primary relative">
            <button className="gap-2 flex items-center justify-center w-full h-full">
              <span>Get Started</span>
              <ArrowRight className="h-8 w-8 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
