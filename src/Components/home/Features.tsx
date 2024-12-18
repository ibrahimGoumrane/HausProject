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
    <div className="flex items-start justify-start flex-col  desktop:h-[610px] h-auto " id="features">
      <div className="pt-[40px] pl-[40px] desktop:pb-0 pb-[20px]">
        <h2 className="desktop:text-title-primary text-title-secondary  font-semibold">We prioritize</h2>
      </div>
      <div className="grid desktop:grid-cols-4 desktop:grid-rows-1 grid-rows-4 grid-cols-1  mx-auto   flex-1 w-screen desktop:divide-x-[2px] divide-y-[2px] desktop:divide-y-0 divide-black-primary desktop:w-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 text-black-primary bg-white-primary group hover:bg-black-primary hover:text-white-primary  transition-all duration-300 ease-in-out "
          >
            <h3 className="desktop:text-title-primary text-title-secondary  desktop:font-semibold font-medium italic  pb-5 ">
              {feature.title}
            </h3>
            <p className="desktop:text-paragraph-primary text-paragraph-secondary ">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
