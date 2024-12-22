interface Hive {
  id: number;
  x: number;
  y: number;
  panImage: string;
  name: string;
  status: string;
  amenities: string[];
  reservedTimeSlots: string[];
}

interface HiveSpace {
  id: number;
  height: number;
  width: number;
  location: string;
  bgImage: string;
  hives: Hive[];
}

const hiveSpace: HiveSpace = {
  id: 1,
  height: 736,
  width: 909,
  location: 'Ghandi - Casablanca',
  bgImage: 'assets/hivespace1_cropped.png',
  hives: [
    {
      id: 1,
      x: 130,
      y: 200,
      name: 'Hive 1',
      status: 'Available',
      amenities: ['Adjustable seat', 'Laptop stand'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image.jpg',
    },
    {
      id: 2,
      x: 180,
      y: 200,
      name: 'Hive 2',
      status: 'Available',
      amenities: ['Adjustable seat', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image_2.jpg',
    },
    {
      id: 3,
      x: 240,
      y: 200,
      name: 'Hive 3',
      status: 'Unavailable',
      amenities: ['Adjustable seat', 'Laptop stand', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image_2.jpg',
    },
    {
      id: 4,
      x: 320,
      y: 400,
      name: 'Hive 4',
      status: 'Available',
      amenities: ['Adjustable seat', 'Laptop stand'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image.jpg',
    },
    {
      id: 5,
      x: 290,
      y: 400,
      name: 'Hive 5',
      status: 'Available',
      amenities: ['Adjustable seat', 'Laptop stand', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image.jpg',
    },
    {
      id: 6,
      x: 260,
      y: 400,
      name: 'Hive 6',
      status: 'Available',
      amenities: ['Laptop stand', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image_2.jpg',
    },
    {
      id: 7,
      x: 230,
      y: 400,
      name: 'Hive 7',
      status: 'Available',
      amenities: ['Adjustable seat', 'Laptop stand', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image_2.jpg',
    },
    {
      id: 8,
      x: 195,
      y: 340,
      name: 'Hive 8',
      status: 'Available',
      amenities: ['Adjustable seat', 'Laptop stand', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image.jpg',
    },
    {
      id: 9,
      x: 180,
      y: 580,
      name: 'Hive 9',
      status: 'Available',
      amenities: ['Adjustable seat', 'Laptop stand'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image.jpg',
    },
    {
      id: 10,
      x: 135,
      y: 580,
      name: 'Hive 10',
      status: 'Available',
      amenities: ['Laptop stand', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image_2.jpg',
    },
    {
      id: 11,
      x: 180,
      y: 690,
      name: 'Hive 11',
      status: 'Available',
      amenities: ['Adjustable seat', 'Laptop stand', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image.jpg',
    },
    {
      id: 12,
      x: 135,
      y: 690,
      name: 'Hive 12',
      status: 'Available',
      amenities: ['Adjustable seat', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image.jpg',
    },
    {
      id: 13,
      x: 180,
      y: 760,
      name: 'Hive 13',
      status: 'Available',
      amenities: ['Adjustable seat', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image_2.jpg',
    },
    {
      id: 14,
      x: 135,
      y: 760,
      name: 'Hive 14',
      status: 'Available',
      amenities: ['Adjustable seat', 'Laptop stand', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image.jpg',
    },
    {
      id: 15,
      x: 180,
      y: 650,
      name: 'Hive 15',
      status: 'Available',
      amenities: ['Adjustable seat', 'Laptop stand', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image_2.jpg',
    },
    {
      id: 16,
      x: 135,
      y: 650,
      name: 'Hive 16',
      status: 'Available',
      amenities: ['Adjustable seat', 'Laptop stand'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image.jpg',
    },
    {
      id: 17,
      x: 180,
      y: 810,
      name: 'Hive 17',
      status: 'Available',
      amenities: ['Adjustable seat', 'Laptop stand', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image.jpg',
    },
    {
      id: 18,
      x: 135,
      y: 810,
      name: 'Hive 18',
      status: 'Available',
      amenities: ['Laptop stand', 'Charging port'],
      reservedTimeSlots: ['06:00 - 10:00'],
      panImage: 'assets/360Image_2.jpg',
    },
  ],
};

export default hiveSpace;
export type { HiveSpace, Hive };
