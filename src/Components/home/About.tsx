const About = () => {
  return (
    <div className="flex items-start justify-between  h-[605px] border-b-[1px] border-black-primary">
      <div className="pt-[40px] pl-[40px]">
        <h2 className="text-title-primary font-bold ">About Haus.</h2>
        <div className="text-paragraph-primary max-w-[700px] ">
          <p className="mb-6">
            At <span className="font-semibold">Haus</span>, we believe that the right environment is the cornerstone of
            productivity, creativity and personal growth. Our mission is to provide spaces that do more than just
            accommodate to work - they inspire it.
          </p>
          <p className="">
            Our approach to designing coworking spaces is deeply rooted in{' '}
            <span className="italic font-normal">scientific research</span> on productivity, ergonomics, and the
            psychology of workspaces.
          </p>
        </div>
      </div>
      <div className="relative w-[550px] h-[605px]  border-l-[1px] border-black-primary">
        <img
          src="assets/Aboutimage4.png"
          alt="Office space 4"
          className=" h-[330px] object-cover absolute w-[275px] border-l-[1px] border-black-primary  bottom-0 right-0  "
        />
        <img
          src="assets/Aboutimage1.png"
          alt="Office space 1"
          className=" h-[330px] border-b-[1px] border-r-[1px] border-black-primary absolute w-[275px] top-0 left-0  object-cover  "
        />
        <img
          src="assets/Aboutimage2.png"
          alt="Office space 2"
          className=" h-[275px] object-cover border-b-[1px]  border-l-[1px] border-black-primary absolute w-[275px]  top-0 right-0  "
        />
        <img
          src="assets/Aboutimage3.png"
          alt="Office space 3"
          className=" h-[275px] object-cover  absolute w-[275px]  bottom-0 left-0  "
        />
      </div>
    </div>
  );
};

export default About;
