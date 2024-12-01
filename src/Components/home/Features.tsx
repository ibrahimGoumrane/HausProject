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
    <div className="flex items-start justify-start flex-col  h-[610px] border-y-[4px] border-black-primary">
      <div className="p-[40px]">
        <h2 className="text-title-secondary  mb-8">We prioritize</h2>
      </div>
      <div className="grid grid-cols-4  mx-auto divide-x-[3px] divide-black-primary flex-1">
        {features.map((feature, index) =>
          feature.active ? (
            <div key={index} className="p-6 bg-black-primary text-white-primary ">
              <feature.icon className="h-12 w-12 mb-2" />
              <h3 className="text-title-secondary font-bold pb-5">{feature.title}</h3>
              <p className="text-paragraph-secondary ">{feature.description}</p>
            </div>
          ) : (
            <div key={index} className="p-6 text-black-primary bg-white-primary ">
              <feature.icon className="h-12 w-12 mb-2" />
              <h3 className="text-title-secondary font-bold pb-5">{feature.title}</h3>
              <p className="text-paragraph-secondary ">{feature.description}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Features;
