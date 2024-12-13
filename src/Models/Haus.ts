export interface Location {
  id: number;
  location: string;
  floor: number;
  reservations: Reservation[];
  amenities: string[];
}
export interface Reservation {
  date: string;
  startTime: string;
  endTime: string;
}
