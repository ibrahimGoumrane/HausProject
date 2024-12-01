const testimonials = [
  {
    name: 'Rafiq B.',
    role: 'Remote software developer',
    active: true,
    content:
      "As someone who's worked from home for years, transitioning to this coworking space has been a game-changer. The environment is thoughtfully curated—down to the background music and perfectly brewed coffee. It's given me the structure and inspiration I was missing.",
  },
  {
    name: 'Aziz H.',
    role: 'Remote software developer',
    content:
      "As someone who's worked from home for years, transitioning to this coworking space has been a game-changer. The environment is thoughtfully curated—down to the background music and perfectly brewed coffee. It's given me the structure and inspiration I was missing.",
  },
  {
    name: 'Aziz H.',
    role: 'Remote software developer',
    content:
      "As someone who's worked from home for years, transitioning to this coworking space has been a game-changer. The environment is thoughtfully curated—down to the background music and perfectly brewed coffee. It's given me the structure and inspiration I was missing.",
  },
];

const Testimonials = () => {
  return (
    <div className="flex items-start bg-black-primary flex-col justify-between  h-[775px] border-y-[4px] border-black-primary">
      <div className="p-[40px]">
        <h2 className="text-title-secondary font-bold  text-white-primary">Haus. visitors</h2>
      </div>
      <div className="flex-1 w-full flex items-start justify-center   mx-auto">
        <div className="grid grid-cols-3 gap-16 px-8 ">
          {testimonials.map((testimonial) =>
            testimonial.active ? (
              <div
                key={testimonial.name}
                className="bg-white-primary w-[550px] h-[570px] p-8  shadow-sm text-center flex items-center flex-col  justify-start  "
              >
                <div className="w-16 h-16 bg-black-primary rounded-full" />
                <div>
                  <h3 className="text-black-secondary text-paragraph-primary font-bold">{testimonial.name}</h3>
                  <p className="text-black-primary text-paragraph-secondary  font-semibold">{testimonial.role}</p>
                </div>
                <p className="text-black-primary text-paragraph-secondary leading-loose italic">
                  {testimonial.content}
                </p>
              </div>
            ) : (
              <div
                key={testimonial.name}
                className="border-white-primary border-[4px] w-[550px] h-[570px] p-8  shadow-sm text-center flex items-center flex-col  justify-start  "
              >
                <div className="w-16 h-16 bg-white-primary rounded-full" />
                <div>
                  <h3 className="text-white-secondary text-paragraph-primary font-bold">{testimonial.name}</h3>
                  <p className="text-white-primary text-paragraph-secondary  font-semibold">{testimonial.role}</p>
                </div>
                <p className="text-white-primary text-paragraph-secondary leading-loose italic">
                  {testimonial.content}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
