const testimonials = [
  {
    name: 'Rafiq B.',
    role: 'Remote software developer',
    content: 'As someone who\'s worked from home for years, transitioning to this coworking space has been a game-changer. The environment is thoughtfully curated—down to the background music and perfectly brewed coffee. It\'s given me the structure and inspiration I was missing.'
  },
  {
    name: 'Aziz H.',
    role: 'Remote software developer',
    content: 'As someone who\'s worked from home for years, transitioning to this coworking space has been a game-changer. The environment is thoughtfully curated—down to the background music and perfectly brewed coffee. It\'s given me the structure and inspiration I was missing.'
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Haus. visitors</h2>
        <div className="grid grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;