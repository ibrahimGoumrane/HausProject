const testimonials = [
  {
    name: 'Rafiq B.',
    role: 'Remote software developer',
    active: true,
    content:
      "'As someone who's worked from home for years, transitioning to this coworking space has been a game-changer. The environment is thoughtfully curated—down to the background music and perfectly brewed coffee. It's given me the structure and inspiration I was missing.'",
  },
  {
    name: 'Aziz H.',
    role: 'Remote software developer',
    content:
      "'As someone who's worked from home for years, transitioning to this coworking space has been a game-changer. The environment is thoughtfully curated—down to the background music and perfectly brewed coffee. It's given me the structure and inspiration I was missing.'",
  },
  {
    name: 'Aziz H.',
    role: 'Remote software developer',
    content:
      "'As someone who's worked from home for years, transitioning to this coworking space has been a game-changer. The environment is thoughtfully curated—down to the background music and perfectly brewed coffee. It's given me the structure and inspiration I was missing.'",
  },
];

const Testimonials = () => {
  return (
    <div className="flex items-start bg-black-primary flex-col justify-between h-auto py-10  md:h-[775px] border-y-[4px] border-black-primary">
      <div className="md:pl-[40px] pb-4 md:pb-10 pl-0">
        <h2 className="text-title-secondary   text-white-primary">Haus. visitors</h2>
      </div>
      <div className="flex-1 w-full flex items-start justify-start   mx-auto max-w-[1400px] 2xl:max-w-max  overflow-x-auto">
        <div className="flex items-center justify-center gap-16 px-8  ">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white-primary text-black-primary group hover:bg-black-primary hover:text-white-primary hover:border-white-primary border-transparent border-[4px] w-[350px] md:w-[550px]  md:h-[570px] p-8  shadow-sm text-center flex items-center flex-col  justify-start  "
            >
              <div className="w-16 h-16 bg-black-primary group-hover:bg-white-primary rounded-full" />
              <div>
                <h3 className=" md:text-paragraph-secondary mobile:text-scroll-text text-title-mobile font-semibold">
                  {testimonial.name}
                </h3>
                <p className=" md:text-scroll-text mobile:text-title-mobile text-paragraph-mobile  italic font-light">
                  {testimonial.role}
                </p>
              </div>
              <p className=" md:text-paragraph-secondary mobile:text-scroll-text text-paragraph-mobile leading-relaxed italic">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
