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
  return (
    <div className="flex flex-col sm:flex-row items-start bg-white-primary justify-center px-12 py-10 border-y-2 border-black-primary">
      <div className="w-2/6 pb-6">
        <h2 className="text-title-secondary text-black-primary font-medium">FAQ</h2>
      </div>
      <div className="hs-accordion-group w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`hs-accordion bg-white border-t-2 last:border-b-2 border-black-primary`}
            id={`accordion-question-${index}`}
          >
            <button
              className="hs-accordion-toggle inline-flex items-center gap-x-3 w-full font-medium text-4xl text-start text-black-primary py-4 px-5  disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded="false"
              aria-controls={`hs-basic-bordered-collapse-${index}`}
            >
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
              </svg>
              {faq.question}
            </button>
            <div
              id={`hs-basic-bordered-collapse-${index}`}
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby={`hs-bordered-heading-${index}`}
            >
              <div className="pb-4 px-5">
                <p className="text-black-primary text-3xl">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
