import { useState } from 'react';
import { AvailableSeats, availableSeats } from '../../Data/locations';
import AvailableSeatsComponent from './AvailableSeats';
import BookingDetails from './BookingDetails';
import Image360 from './Image360';

const BookingCard = () => {
  const [activeSeatId, setActiveSeatId] = useState<number | null>(null);
  const activeSeat: AvailableSeats | undefined = availableSeats.find((seat) => seat.id === activeSeatId);
  const onSeatClick = (id: number) => {
    setActiveSeatId(id);
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <AvailableSeatsComponent handleClick={onSeatClick} activeSeatId={activeSeatId} />
      <div className="w-[524px] flex items-center justify-between flex-col md:w-1/3">
        <Image360 />
        <BookingDetails activeSeat={activeSeat} />
      </div>
    </div>
  );
};

export default BookingCard;
