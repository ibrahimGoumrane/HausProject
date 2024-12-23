import { useState } from 'react';
import { AvailableSeats, availableSeats } from '../../Data/locations';
// import AvailableSeatsComponent from './AvailableSeats';
import BookingDetails from './BookingDetails';
import Image360 from './Image360';
import { locations } from '../../Data/locations';
import { amenities } from '../../Data/amenities';
import hiveSpace, { Hive } from '../../Data/hiveSpace';
import HiveChart from './HiveChart';

const BookingCard = () => {
  const [activeHiveState, setActiveHive] = useState<Hive | null>(null);
  // const onSeatClick = (id: number) => {
  //   setActiveSeatId(id);
  // };
  const handleHiveSelection = (id: number) => {
    const hive = hiveSpace.hives.find((hive) => hive.id === id);
    if (hive) {
      setActiveHive(hive);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 pb-6 gap-4">
      <div className="w-full flex gap-4">
        {/* Location selection  */}
        <select
          data-hs-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 py-2 px-3 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white text-start text-lg border-2 border-black-primary min-w-[200px]",
                        "dropdownClasses": "border-2 border-black-primary mt-2 z-50 w-full max-h-72 bg-white-primary overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white-primary [&::-webkit-scrollbar-thumb]:bg-black-primary",
                        "optionClasses": "py-2 px-4 w-full text-lg cursor-pointer",
                        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 \" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                        }'
          className="hidden"
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        {/* amenities selection */}
        <select
          multiple
          data-hs-select='{
                        "placeholder": "Select multiple options...",
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                        "toggleSeparators": {
                        "betweenItemsAndCounter": "&"
                        },
                        "toggleCountText": "+",
                        "toggleCountTextPlacement": "prefix-no-space",
                        "toggleCountTextMinItems": 3,
                        "toggleCountTextMode": "nItemsAndCount",
                      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 py-2 px-3 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white text-start text-lg border-2 border-black-primary min-w-[200px]",
                        "dropdownClasses": "border-2 border-black-primary mt-2 z-50 w-full max-h-72 bg-white-primary overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white-primary [&::-webkit-scrollbar-thumb]:bg-black-primary",
                        "optionClasses": "py-2 px-4 w-full text-lg cursor-pointer",
                        "optionTemplate": "<div class=\"flex justify-between items-center hs-selected:text-black-primary hs-selected:bg-white-primary w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 \" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                        }'
          className="hidden"
        >
          <option value=""></option>
          {amenities.map((am) => (
            <option key={am} value={am}>
              {am}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col xl:flex-row justify-center gap-8 w-full">
        {/* <AvailableSeatsComponent handleClick={onSeatClick} activeSeatId={activeSeatId} /> */}
        <div className=" flex justify-center w-full max-h-full max-w-full overflow-auto">
          <HiveChart hiveSpace={hiveSpace} onHiveSelection={handleHiveSelection} />
        </div>
        <div className="w-full flex items-end flex-col xl:w-5/12 gap-8">
          <Image360 activeHive={activeHiveState} />
          <BookingDetails activeHive={activeHiveState} />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
