import { useState } from 'react';

import BookingDetails from './BookingDetails';
import Image360 from './Image360';
import { Hive, meetingRooms } from '../../Data/hiveSpace';
import HiveChart from './HiveChart';

const BookMetting = () => {
  const [activeMeetingRoomState, setActiveMeetingRoom] = useState<Hive | null>(null);

  const handleHiveSelection = (id: number) => {
    const meetingRoom = meetingRooms.hives.find((meetingRoom) => meetingRoom.id === id);
    if (meetingRoom) {
      setActiveMeetingRoom(meetingRoom);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 pb-6 gap-4">
      <div className="flex flex-col xl:flex-row justify-center gap-8 w-full">
        <div className=" flex justify-center w-full max-h-full max-w-full overflow-auto">
          <HiveChart
            hiveSpace={meetingRooms}
            configuration={{
              radius: 30,
              sides: 4,
              rotation: 45,
            }}
            onHiveSelection={handleHiveSelection}
          />
        </div>
        <div className="w-full flex items-end flex-col min-h-[740px] xl:w-5/12 gap-8">
          <Image360 activeHive={activeMeetingRoomState} />
          <BookingDetails activeHive={activeMeetingRoomState} />
        </div>
      </div>
    </div>
  );
};

export default BookMetting;
