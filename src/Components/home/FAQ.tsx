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
    <div
      className="flex flex-col sm:flex-row items-start  bg-white-primary py-5 justify-center  border-y-[2px] border-black-primary"
      id="faq"
    >
      <div className="md:pl-[40px] pl-0">
        <h2 className="text-title-primary text-black-primary font-medium">FAQ</h2>
      </div>
      <div className="hs-accordion-group w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`hs-accordion bg-white border-t-2 last:border-b-2 border-black-primary sm:mx-16 mx-0`}
            id={`accordion-question-${index}`}
          >
            <button
              className="hs-accordion-toggle inline-flex items-center gap-x-3 w-full font-medium xl:text-title-secondary  mobile:text-scroll-text text-title-mobile  text-start text-black-primary py-4 px-5  disabled:opacity-50 disabled:pointer-events-none"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                <p className="text-black-primary xl:text-paragraph-secondary mobile:text-scroll-text text-text-mobile font-normal ">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
