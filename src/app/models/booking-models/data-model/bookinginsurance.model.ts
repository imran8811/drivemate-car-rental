export interface IBookingInsurance {
  insuranceTypeCode: string;
  insuranceTypeDisplayName: string;
}

export class BookingInsurance implements IBookingInsurance {
  insuranceTypeCode = '';
  insuranceTypeDisplayName = '';
}
