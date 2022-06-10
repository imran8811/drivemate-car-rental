export interface IRent {
  rentalCategoryCode: string;
  rentalCategoryDisplayName: string;
  rentalTypeCode: string;
  rentalTypeDisplayName: string;
  rentChannelCode: string;
  rentChannelDisplayName: string;
  rentChannelRefCode: string;
  rentChannelRefDisplayName: string;
}

export class Rent implements IRent {
  rentalCategoryCode = '';
  rentalCategoryDisplayName = '';
  rentalTypeCode = '';
  rentalTypeDisplayName = '';
  rentChannelCode = '';
  rentChannelDisplayName = '';
  rentChannelRefCode = '';
  rentChannelRefDisplayName = '';
}
