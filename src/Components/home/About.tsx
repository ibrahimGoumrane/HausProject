const About = () => {
  return (
    <div className="relative h-auto md:h-[605px] border-b-[1px] border-black-primary" id="about">
      <div className="lg:pt-[40px]  pt-[20px] md:pl-[40px]">
        <h2 className="desktop:text-title-primary text-title-secondary  font-bold">About Haus.</h2>
      </div>
      <div className="flex flex-col-reverse  md:block">
        <div className="relative xl:w-[550px] lg:w-[450px] md:w-[400px]   h-[605px] border-t-[1px] lg:border-t-0 lg:border-l-[1px] border-black-primary md:absolute md:top-0 md:right-0 ">
          <img
            src="assets/Aboutimage4.png"
            alt="Office space 4"
            className="h-[330px] object-cover absolute w-[50%] border-l-[1px] border-black-primary bottom-0 right-0"
          />
          <img
            src="assets/Aboutimage1.png"
            alt="Office space 1"
            className="h-[330px] border-b-[1px] border-r-[1px] border-black-primary absolute w-[50%]   top-0 left-0 object-cover"
          />
          <img
            src="assets/Aboutimage2.png"
            alt="Office space 2"
            className="h-[275px] object-cover border-b-[1px] border-l-[1px] border-black-primary absolute w-[50%] top-0 right-0"
          />
          <img
            src="assets/Aboutimage3.png"
            alt="Office space 3"
            className="h-[275px] object-cover absolute w-[50%]  bottom-0 left-0"
          />
        </div>
        <div className="desktop:text-paragraph-primary  xl:text-paragraph-secondary mobile:text-scroll-text  text-title-mobile   desktop:max-w-[900px] xl:max-w-[600px] lg:max-w-[450px] md:max-w-[350px] w-screen px-[10px]">
          <p className="mb-6">
            At <span className="font-semibold">Haus</span>, we believe that the right environment is the cornerstone of
            productivity, creativity and personal growth. Our mission is to provide spaces that do more than just
            accommodate to work - they inspire it.
          </p>
          <p>
            Our approach to designing coworking spaces is deeply rooted in{' '}
            <span className="italic font-normal">scientific research</span> on productivity, ergonomics, and the
            psychology of workspaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
