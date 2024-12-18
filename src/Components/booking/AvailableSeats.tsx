import { availableSeats } from '../../Data/locations';
import SvgReservedSeat from './SvgReservedSeat';
import SvgFreeSeat from './SvgFreeSeat';

interface AvailableSeatsProps {
  handleClick: (id: number) => void;
  activeSeatId?: number | null;
}

const AvailableSeats = ({ handleClick, activeSeatId }: AvailableSeatsProps) => {
  return (
    <div className="bg-black-primary lg:min-w-[796px] md:w-2/3 lg:min-h-[693px] p-4 gap-8 grid grid-cols-5 grid-rows-3 place-items-center">
      {availableSeats.map((seat, index) =>
        seat.reservedTimeSlots.length === seat.timeSlots.length ? (
          <div
            key={index}
            style={{
              gridRowStart: seat.top,
              gridColumnStart: seat.left,
            }}
          >
            <SvgReservedSeat active={seat.id === activeSeatId} />
          </div>
        ) : (
          <div
            key={index}
            style={{
              gridRowStart: seat.top,
              gridColumnStart: seat.left,
            }}
            onClick={() => handleClick(seat.id)}
          >
            <SvgFreeSeat active={seat.id === activeSeatId} />
          </div>
        ),
      )}
    </div>
  );
};

export default AvailableSeats;
