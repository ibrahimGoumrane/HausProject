const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Haus.</h2>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              At <span className="font-semibold">Haus</span>, we believe that the right environment is the cornerstone
              of productivity, creativity and personal growth. Our mission is to provide spaces that do more than just
              accommodate to work - they inspire it.
            </p>
            <p className="text-lg">
              Our approach to designing coworking spaces is deeply rooted in{' '}
              <span className="italic">scientific research</span> on productivity, ergonomics, and the psychology of
              workspaces.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/photo-15${i}8366216548-37526070297c?auto=format&fit=crop&w=600&q=80`}
                alt={`Office space ${i}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
