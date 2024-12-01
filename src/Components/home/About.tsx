const About = () => {
  return (
    <div className="flex items-start justify-between  h-[610px] border-y-[4px] border-black-primary" >
      <div className="p-[40px]">
        <h2 className="text-title-secondary font-bold mb-8">About Haus.</h2>
        <div className="text-paragraph-secondary max-w-6xl ">
          <p className="mb-6">
            At <span className="font-semibold">Haus</span>, we believe that the right environment is the cornerstone of
            productivity, creativity and personal growth. Our mission is to provide spaces that do more than just
            accommodate to work - they inspire it.
          </p>
          <p className="">
            Our approach to designing coworking spaces is deeply rooted in{' '}
            <span className="italic font-semibold">scientific research</span> on productivity, ergonomics, and the
            psychology of workspaces.
          </p>
        </div>
      </div>
      <div className="relative w-[550px] h-[605px]  border-l-[4px] border-black-primary">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
          alt="Office space 1"
          className=" h-[330px] border-b-[4px] border-r-[4px] border-black-primary absolute w-[275px] top-0 left-0  object-cover  "
        />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
          alt="Office space 2"
          className=" h-[275px] object-cover border-b-[4px] border-l-[4px] border-black-primary absolute w-[275px]  top-0 right-0  "
        />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
          alt="Office space 3"
          className=" h-[275px] object-cover  absolute w-[275px]  bottom-0 left-0  "
        />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
          alt="Office space 4"
          className=" h-[330px] object-cover absolute w-[275px] border-l-[4px] border-black-primary  bottom-0 right-0  "
        />
      </div>
    </div>
  );
};

export default About;
