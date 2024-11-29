import { Brain, Lightbulb, Users, Leaf } from 'lucide-react';

const features = [
  {
    title: 'Productivity',
    icon: Brain,
    description: "We've optimized lighting, soundscapes, and layouts to minimize distractions and maximize focus."
  },
  {
    title: 'Ergonomics',
    icon: Lightbulb,
    description: 'Our furniture is designed with your comfort and health in mind, promoting posture that supports long hours of creativity.'
  },
  {
    title: 'Collaboration',
    icon: Users,
    description: "With dynamic spaces that encourage interaction and innovation, you'll find the perfect balance between solitude and synergy."
  },
  {
    title: 'Biophilia',
    icon: Leaf,
    description: 'Natural elements like plants and ample sunlight create a calming atmosphere, proven to boost both mood and performance.'
  }
];

const Features = () => {
  return (
    <div className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">We prioritize</h2>
      <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <feature.icon className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;