import { Brain, Lightbulb, Users, Leaf } from 'lucide-react';

const features = [
  {
    title: 'Productivity',
    icon: Brain,
    description: "We've optimized lighting, soundscapes, and layouts to minimize distractions and maximize focus.",
  },
  {
    title: 'Ergonomics',
    icon: Lightbulb,
    description:
      'Our furniture is designed with your comfort and health in mind, promoting posture that supports long hours of creativity.',
  },
  {
    title: 'Collaboration',
    icon: Users,
    active: true,
    description:
      "With dynamic spaces that encourage interaction and innovation, you'll find the perfect balance between solitude and synergy.",
  },
  {
    title: 'Biophilia',
    icon: Leaf,
    description:
      'Natural elements like plants and ample sunlight create a calming atmosphere, proven to boost both mood and performance.',
  },
];

const Features = () => {
  return (
    <div className="flex items-start justify-start flex-col  h-[610px] " id="features">
      <div className="pt-[40px] pl-[40px]">
        <h2 className="text-title-primary font-medium">We prioritize</h2>
      </div>
      <div className="grid grid-cols-4  mx-auto divide-x-[2px] divide-black-primary flex-1">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 text-black-primary bg-white-primary group hover:bg-black-primary hover:text-white-primary hover:border-b-2 hover:border-b-white-primary transition-all duration-300 ease-in-out"
          >
            <h3 className="text-6xl font-semibold pb-5 ">{feature.title}</h3>
            <p className="text-paragraph-primary ">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
