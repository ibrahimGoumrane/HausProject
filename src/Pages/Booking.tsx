import { useSearchParams } from 'react-router-dom';
import BookingCard from '../Components/booking/BookingCard';
import Navbar from '../Components/Navbar';
import { useEffect, useState } from 'react';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.get('type')); // Get the 'type' query parameter

  useEffect(() => {
    setType(searchParams.get('type'));
  }, [searchParams]);
  // console.log(searchParam.get('type'));
  return (
    // <div className="h-screen w-screen flex flex-col items-center justify-center">
    //   <div>
    //     <h1 className="xl:text-title-primary text-title-secondary   text-center font-light  ">
    //       Book a <span className=" font-medium">Hive</span>
    //     </h1>
    //     <BookingCard />
    //   </div>
    //   <div className="border-t-[2px] border-black-primary mt-8">
    //     <h1 className="xl:text-title-primary text-title-secondary   text-center font-light  ">
    //       Book a <span className=" font-medium">Meeting Room</span>
    //     </h1>
    //   </div>
    // </div>
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="hs-accordion-group h-full overflow-auto ">
        <div
          className={`hs-accordion ${
            type === 'hive' || !type ? 'active' : ''
          } border-b-2 border-black-primary w-full" id="hs-basic-no-arrow-heading-one`}
        >
          <button
            className="hs-accordion-toggle inline-flex w-full"
            aria-expanded={type === 'hive' || !type}
            aria-controls="hs-basic-no-arrow-collapse-one"
          >
            <h1 className="xl:text-title-primary text-paragraph-secondary text-center font-light  w-full">
              Book a <span className=" font-medium">Hive</span>
            </h1>
          </button>
          <div
            id="hs-basic-no-arrow-collapse-one"
            className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
              type === 'hive' || !type ? '' : 'hidden'
            }`}
            role="region"
            aria-labelledby="hs-basic-no-arrow-heading-one"
          >
            <BookingCard />
          </div>
        </div>

        <div
          className={`hs-accordion border-b-2 border-black-primary w-full ${type === 'room' ? 'active' : ''}`}
          id="hs-basic-no-arrow-heading-two"
        >
          <button
            className="hs-accordion-toggle inline-flex w-full"
            aria-expanded={type === 'room'}
            aria-controls="hs-basic-no-arrow-collapse-two"
          >
            <h1 className="xl:text-title-primary text-title-secondary text-center font-light w-full ">
              Book a <span className=" font-medium">Meeting Room</span>
            </h1>
          </button>
          <div
            id="hs-basic-no-arrow-collapse-two"
            className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
              type === 'room' ? '' : 'hidden'
            }`}
            role="region"
            aria-labelledby="hs-basic-no-arrow-heading-two"
          >
            <p className="text-gray-800">
              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds
              the appropriate classes that we use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
