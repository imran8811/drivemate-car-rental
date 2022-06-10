import { IKeyValue } from './key-value';

export interface IAssetInfo {
  vinNumber: string;
  engineCode: string;
  engineSerialNumber: string;
  countryOfOriginCode: string;
  countryOfOriginDisplayName: string;
  dateOfProduction: string;
  transmissionSerialNumber: string;
  plantCode: string;
  numberOfSeats: number;
  numberOfDoors: number;
  isAutomaticTransmission: boolean;
  fuelTypes: IKeyValue[];
  mileage: number;
  gpsTypeCode: string;
  gpsTypeDisplayName: string;
  colorCode: string;
  colorDisplayName: string;
  features: IKeyValue[];
  description: string;
  statusCode: string;
  statusDisplayName: string;
  numberOfBaggages: number;
  rentalCategoryCode: string;
}

export class AssetInfo implements IAssetInfo {

  vinNumber = '';
  engineCode = '';
  engineSerialNumber = '';
  countryOfOriginCode = '';
  countryOfOriginDisplayName = '';
  dateOfProduction = '';
  transmissionSerialNumber = '';
  plantCode = '';
  numberOfSeats = 0;
  numberOfDoors = 0;
  isAutomaticTransmission = true;
  fuelTypes = [];
  mileage = 0;
  gpsTypeCode = '';
  gpsTypeDisplayName = '';
  colorCode = '';
  colorDisplayName = '';
  features = [];
  description = '';
  statusCode: string;
  statusDisplayName: string;
  numberOfBaggages = 0;
  rentalCategoryCode = '';
}
