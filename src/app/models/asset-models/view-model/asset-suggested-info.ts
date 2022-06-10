import { IKeyValue } from '../data-model/key-value';

interface IInsurance {
  modelYear: number;
  insuranceTypeCode: string;
  insuranceTypeDisplayName: string;
  amount: number;
  isToBeIncludedInRent: boolean;
}
interface ISuggestedPrices {
  dailyPrice: number;
  modelYear: number;
  monthlyPrice: number;
}

export interface ICarSuggestedInfo {
  _id: string;
  vehicleCategoryCode: string;
  vehicleCategoryDisplayName: string;
  _makeId: string;
  makeName: string;
  _modelId: string;
  assetModelName: string;
  _subModelId: string;
  subModelName: string;
  isAutomaticTransmission: boolean;
  numberOfSeats: number;
  numberOfDoors: number;
  fuelTypes: IKeyValue[];
  transmissionTypeCode: string;
  transmissionTypeDisplayName: string;
  assetTypeCode: string;
  assetTypeDisplayName: string;
  insurances: IInsurance[];
  suggestedPrices: ISuggestedPrices[];
  depositAmount: number;
  isActive: boolean;
  createdOn: string;
  modifiedOn: string;
}

export class CarSuggestedInfo implements ICarSuggestedInfo {
  _id = '';
  vehicleCategoryCode = '';
  vehicleCategoryDisplayName = '';
  _makeId = '';
  makeName = '';
  _modelId = '';
  assetModelName = '';
  _subModelId = '';
  subModelName = '';
  isAutomaticTransmission = false;
  numberOfSeats = 0;
  numberOfDoors = 0;
  fuelTypes = [];
  transmissionTypeCode = '';
  transmissionTypeDisplayName = '';
  assetTypeCode: string;
  assetTypeDisplayName: string;
  insurances = [];
  suggestedPrices = [];
  depositAmount = 0;
  isActive = false;
  createdOn = '';
  modifiedOn = '';
}
