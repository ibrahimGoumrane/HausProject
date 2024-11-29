import { ChevronDown } from 'lucide-react';

const faqs = [
  'Can I cancel my membership?',
  'Are there any hidden fees?',
  'What amenities are included in the membership?',
  'Do you offer private offices?',
];

const FAQ = () => {
  return (
    <div className="py-16 px-6 bg-gray-50" id="faq">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((question) => (
            <div
              key={question}
              className="border-t py-4 flex items-center justify-between cursor-pointer hover:text-gray-600"
            >
              <span className="text-lg">+ {question}</span>
              <ChevronDown className="h-5 w-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
