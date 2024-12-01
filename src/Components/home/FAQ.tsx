import { useState } from 'react';

const faqs = [
  { question: 'Can I cancel my membership?', answer: 'Yes, you can cancel your membership at any time.' },
  { question: 'Are there any hidden fees?', answer: 'No, there are no hidden fees. All fees are clearly outlined.' },
  {
    question: 'What amenities are included in the membership?',
    answer: 'The membership includes access to office spaces, high-speed internet, and free refreshments.',
  },
  { question: 'Do you offer private offices?', answer: 'Yes, private offices are available for members upon request.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the currently open question
  };

  return (
    <div className="flex items-start bg-white-primary justify-center py-5 h-[550px] border-y-[4px] border-black-primary">
      <div className="px-[40px] pt-[40px] w-[470px]">
        <h2 className="text-title-secondary text-black-primary">FAQ</h2>
      </div>
      <div className="max-w-7xl mx-auto self-center flex-1">
        <div className="space-y-4 border-b-[4px] border-black-primary">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-t-[4px] py-4 border-black-primary transition-all min-h-[80px]">
              <div
                className="flex items-center justify-between cursor-pointer "
                onClick={() => handleToggle(index)} // Toggle the dropdown
              >
                <p className="text-paragraph-secondary flex items-center gap-x-5">
                  <span>{openIndex === index ? '-' : '+'}</span> {faq.question}
                </p>
              </div>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden `}>
                <div className={`${openIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-paragraph-secondary">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
