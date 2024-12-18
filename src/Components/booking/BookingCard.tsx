import { useState } from 'react';
import { AvailableSeats, availableSeats } from '../../Data/locations';
import SvgFreeSeat from './SvgFreeSeat';
import SvgReservedSeat from './SvgReservedSeat';
import Svg from './Svg';

const BookingCard = () => {
  const [activeSeatId, setActiveSeatId] = useState<number | null>(null);
  const activeSeat: AvailableSeats | undefined = availableSeats.find((seat) => seat.id === activeSeatId);
  const onSeatClick = (id: number) => {
    setActiveSeatId(id);
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left Section - Icons Grid */}
      <div className="bg-black-primary lg:min-w-[796px] md:w-2/3 lg:min-h-[693px] p-4 gap-8 grid grid-cols-5 grid-rows-3 place-items-center">
        {availableSeats.map((seat, index) =>
          seat.reservedTimeSlots.length === seat.timeSlots.length ? (
            <div
              key={index}
              style={{
                gridRowStart: seat.top,
                gridColumnStart: seat.left,
              }}
              onClick={() => onSeatClick(seat.id)}
            >
              <SvgReservedSeat />
            </div>
          ) : (
            <div
              key={index}
              style={{
                gridRowStart: seat.top,
                gridColumnStart: seat.left,
              }}
              onClick={() => onSeatClick(seat.id)}
            >
              <SvgFreeSeat />
            </div>
          ),
        )}
      </div>

      {/* Right Section - Preview Card */}
      <div className="w-[524px] flex items-center justify-between flex-col md:w-1/3">
        <div className="w-[524px] h-[300px] bg-black-primary mb-2 flex items-center justify-center relative">
          <span className="text-white-primary absolute top-1 left-3 font-medium text-paragraph-secondary ">
            Preview
          </span>
        </div>

        <div className="flex flex-col relative  border-[2px] border-black-primary w-[525px] h-[362px] p-4">
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
                  <li key={index} className="text-scroll-text text-center   p-2 line-through flex-1 ">
                    {timeSlot}
                  </li>
                ) : (
                  <li key={index} className="text-scroll-text text-center   p-2  flex-1">
                    {timeSlot}
                  </li>
                ),
              )}
            </ul>
          </div>
          <button className="w-full text-white-primary bg-black-primary text-paragraph-secondary py-2">Book</button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
