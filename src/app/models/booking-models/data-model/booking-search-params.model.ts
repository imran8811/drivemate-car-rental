import { PAGE_NO, PAGE_SIZE } from '../../../constants';


export interface IBookingSearchParams {
    bookingId: string;
    renterName: string;
    rentalCategoryCode: string;
    brandModel: string;
    status: string;
    memberType: string;
    startDate: string;
    endDate: string;
    licensePlateNumber: string;
    pageNo: number;
    pageSize: number;
  }

  export class BookingSearchParams implements IBookingSearchParams {
    bookingId = '';
    renterName = '';
    rentalCategoryCode = '';
    brandModel = '';
    status = '';
    memberType = '';
    startDate = '';
    endDate = '';
    licensePlateNumber = '';
    pageNo = +PAGE_NO;
    pageSize = +PAGE_SIZE;
  }
