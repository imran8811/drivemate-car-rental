export interface IRentAT {
  rentalCategoryCode: string;
  rentalCategoryDisplayName: string;
  rentalTypeCode: string;
  rentalTypeDisplayName: string;
  rentChannelCode: string;
  rentChannelDisplayName: string;
  rentChannelRefCode: string;
  rentChannelRefDisplayName: string;
  renterCustomerTypeCode: string;
  renterCustomerTypeDisplayName: string;
}

export class RentAT implements IRentAT {
  rentalCategoryCode = '';
  rentalCategoryDisplayName = '';
  rentalTypeCode = '';
  rentalTypeDisplayName = '';
  rentChannelCode = '';
  rentChannelDisplayName = '';
  rentChannelRefCode = '';
  rentChannelRefDisplayName = '';
  renterCustomerTypeCode = '';
  renterCustomerTypeDisplayName = '';
}
