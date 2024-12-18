import { useSearchParams } from 'react-router-dom';
import BookingCard from '../Components/booking/BookingCard';

const Booking = () => {
  const [searchParam] = useSearchParams('');
  // console.log(searchParam.get('type'));
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="xl:text-title-primary text-title-secondary   text-center font-normal   mb-8">
          Book a <span className=" font-medium">Hive</span>
        </h1>
        <BookingCard />
      </div>
      <div className="border-t-[2px] border-black-primary mt-8">
        <h1 className="xl:text-title-primary text-title-secondary   text-center font-normal  ">
          Book a <span className=" font-medium">Meeting Room</span>
        </h1>
      </div>
    </div>
  );
};

export default Booking;
