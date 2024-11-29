const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-8 px-6 py-12">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
          alt="Modern office space"
          className="w-full h-[500px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-lg" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">
          The place where we <span className="italic">Grow</span>
        </h1>
        <p className="text-xl mb-6">
          Designed to be the premier <span className="bg-blue-100 px-2">24/7 / 365</span> environments.
        </p>
        <p className="text-lg mb-8">
          <span className="font-semibold">Haus</span> spaces combine{' '}
          <span className="font-semibold">comfort, functionality,</span> and{' '}
          <span className="font-semibold">inspiration</span> to elevate your productivity
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md w-fit hover:bg-gray-800">Get Started →</button>
      </div>
    </div>
  );
};

export default Hero;
