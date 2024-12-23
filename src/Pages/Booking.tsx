import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookingCard from '../Components/booking/BookingCard';
import BookingMetting from '../Components/booking/BookMetting';
import Navbar from '../Components/Navbar';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.get('type')); // Get the 'type' query parameter

  useEffect(() => {
    setType(searchParams.get('type'));
    console.log(11);
  }, [searchParams]);
  return (
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
            <h1 className="xl:text-title-primary text-title-secondary text-center font-light w-full ">
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
            id="hs-basic-no-arrow-collapse-one"
            className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
              type === 'hive' || !type ? '' : 'hidden'
            }`}
            role="region"
            aria-labelledby="hs-basic-no-arrow-heading-one"
          >
            <BookingMetting />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
