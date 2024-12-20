import { AvailableSeats } from '../../Data/locations';
import Svg from './Svg';

interface BookingDetailsProps {
  activeSeat: AvailableSeats | undefined;
}

const BookingDetails = ({ activeSeat }: BookingDetailsProps) => {
  return (
    <div className="flex flex-col relative  border-[2px] border-black-primary w-[525px] h-[362px] p-4">
      {activeSeat ? (
        <>
          {' '}
          <Svg className="absolute top-0 right-2" />
          <h3 className="text-paragraph-secondary font-medium">Available</h3>
          <div className="flex flex-col">
            <p className="text-scroll-text font-medium ">Amenities</p>
            <ul className="text-scroll-text text-black-primary flex items-center justify-start  font-normal mb-4">
              {activeSeat?.amenities.map((amenity, index) => (
                <li key={index}>
                  {amenity} {index == activeSeat?.amenities.length - 1 || <span className="mx-2">-</span>}{' '}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-scroll-text font-medium ">Time Slots</h2>
            <ul className="text-scroll-text text-black-primary flex items-center justify-start divide-x-[2px] border-[2px] divide-black-primary border-black-primary font-normal mb-4">
              {activeSeat?.timeSlots.map((timeSlot, index) =>
                activeSeat.reservedTimeSlots.includes(timeSlot) ? (
                  <li
                    key={index}
                    className="text-scroll-text text-center  p-2 line-through flex-1 text-black-primary/50 "
                  >
                    {timeSlot}
                  </li>
                ) : (
                  <li
                    key={index}
                    className="text-scroll-text text-center p-2 flex-1 hover:bg-black-primary hover:text-white-primary cursor-pointer"
                  >
                    {timeSlot}
                  </li>
                ),
              )}
            </ul>
          </div>
          <button className="w-full text-white-primary bg-black-primary text-paragraph-secondary py-2">Book</button>{' '}
        </>
      ) : (
        <h3 className="text-paragraph-secondary font-medium w-full h-full flex items-center justify-center">
          Select a seat to book
        </h3>
      )}
    </div>
  );
};

export default BookingDetails;
