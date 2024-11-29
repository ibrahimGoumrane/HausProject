const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-8 px-6 py-12 bg-white-main">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
          alt="Modern office space"
          className="w-full h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black-main/20 to-transparent rounded-lg" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-mainTitle font-HubotSans font-bold mb-4 text-black-main">
          The place where we <span className="font-PinyonScript">Grow</span>
        </h1>
        <p className="text-mainParagraph mb-6 text-black-main">
          Designed to be the premier <span className="bg-white-secondary px-2">24/7 / 365</span> environments.
        </p>
        <p className="text-secondaryParagraph mb-8 text-black-main">
          <span className="font-semibold">Haus</span> spaces combine{' '}
          <span className="font-semibold">comfort, functionality,</span> and{' '}
          <span className="font-semibold">inspiration</span> to elevate your productivity
        </p>
        <button className="bg-black-main text-white-main px-8 py-4 rounded-md w-fit hover:bg-black-secondary transition-colors text-nav">
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default Hero;