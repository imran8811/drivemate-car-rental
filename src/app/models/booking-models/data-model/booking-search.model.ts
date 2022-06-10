import { IBookingDataModel } from './booking.model';

export interface IBookingSearch {
    bookings: IBookingDataModel[];
    limit: number;
    page: number;
    pages: number;
    total: number;
  }
  
  export class BookingSearch implements IBookingSearch {
    bookings = [];
    limit = 0;
    page = 0;
    pages = 0;
    total = 0;
  }