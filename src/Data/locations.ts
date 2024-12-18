const locations = ['Abdelmoumen - Casablanca', 'Ghandi - Casablanca', 'Agdal - Rabat', 'Gueliz - Marrakech'];
interface AvailableSeats {
  id: number;
  amenities: string[];
  timeSlots: string[];
  reservedTimeSlots: string[];
  top: number;
  left: number;
}
const availableSeats: AvailableSeats[] = [
  {
    id: 1,
    amenities: ['Adjustable seat', 'Laptop stand', 'Charging port'],
    timeSlots: ['6:00-10:00', '10:00-14:00', '14:00-18:00', '18:00-22:00'],
    reservedTimeSlots: [],
    top: 1,
    left: 1,
  },
  {
    id: 5,
    amenities: ['Charging port', 'Laptop stand'],
    timeSlots: ['6:00-10:00', '10:00-14:00', '14:00-18:00', '18:00-22:00'],
    reservedTimeSlots: [],
    top: 1,
    left: 5,
  },
  {
    id: 7,
    amenities: ['Adjustable seat', 'Laptop stand', 'Charging port'],
    timeSlots: ['6:00-10:00', '10:00-14:00', '14:00-18:00', '18:00-22:00'],
    reservedTimeSlots: [],
    top: 2,
    left: 2,
  },
  {
    id: 8,
    amenities: ['Laptop stand', 'Charging port'],
    timeSlots: ['6:00-10:00', '10:00-14:00', '14:00-18:00', '18:00-22:00'],
    reservedTimeSlots: [],
    top: 2,
    left: 3,
  },
  {
    id: 9,
    amenities: ['Adjustable seat'],
    timeSlots: ['6:00-10:00', '10:00-14:00', '14:00-18:00', '18:00-22:00'],
    reservedTimeSlots: [],
    top: 2,
    left: 4,
  },
  {
    id: 11,
    amenities: ['Adjustable seat', 'Laptop stand'],
    timeSlots: ['6:00-10:00', '10:00-14:00', '14:00-18:00', '18:00-22:00'],
    reservedTimeSlots: [],
    top: 3,
    left: 1,
  },
  {
    id: 15,
    amenities: ['Laptop stand'],
    timeSlots: ['6:00-10:00', '10:00-14:00', '14:00-18:00', '18:00-22:00'],
    reservedTimeSlots: [],
    top: 3,
    left: 5,
  },
];

export { availableSeats, locations };
export type { AvailableSeats };
