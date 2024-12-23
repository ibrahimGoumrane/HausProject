import React from 'react';

const Timeline: React.FC = () => {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
      {/* Timeline */}
      <div>
        {/* Heading */}
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            1 Aug, 2023
          </h3>
        </div>
        {/* End Heading */}

        {/* Item 1 */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>
          {/* End Icon */}

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              <svg
                className="shrink-0 size-4 mt-1"
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <line x1="10" x2="8" y1="9" y2="9"></line>
              </svg>
              Created "Preline in React" task
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Find more detailed instructions here.
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item 1 */}

        {/* Item 2 */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>
          {/* End Icon */}

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Release v5.2.0 quick bug fix 🐞
            </h3>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item 2 */}

        {/* Add More Items Here */}
      </div>
      {/* End Timeline */}
    </div>
  );
};

export default Timeline;
