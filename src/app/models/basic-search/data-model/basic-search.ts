import * as moment_ from 'moment-mini';
const moment = moment_;
import { DATETIME_FORMATS, ALL_LOCATIONS } from '../../../constants';

export interface IBasicSearch {
  rentCategoryCode: string;
  rentCategoryDisplayName: string;
  location: string;
  cityLat: number;
  cityLng: number;
  startDate: string;
  endDate: string;

  payment: string;
  brandModel: string;
  sortType: string;
  priceMin: number;
  priceMax: number;
  types: string;
  make: string;
  model: string;
  yearMin: number;
  yearMax: number;
  features: string;
  colors: string;
  transmission: string;


  dropOffLocationLat: number;
  dropOffLocationLng: number;
  dropOffAddress: string;

  returnPickupLocationLat: number;
  returnPickupLocationLng: number;
  returnPickupAddress: string;

  returnDropOffLocationLat: number;
  returnDropOffLocationLng: number;
  returnDropOffAddress: string;

  roundTripSecondStartDate: string;
  islocationSwitch: boolean;
  isTransferBackToAirport: boolean;
}

export class BasicSearch implements IBasicSearch {
  rentCategoryCode = '';
  rentCategoryDisplayName = '';
  location = ALL_LOCATIONS;
  cityLat = null;
  cityLng = null;
  startDate = (d => new Date(new Date(new Date().setDate(d.getDate() + 1)).setMinutes((Math.ceil(d.getMinutes() / 30)) * 30)))(new Date()).toISOString();
  endDate = (d => new Date(new Date(new Date().setDate(d.getDate() + 2)).setMinutes((Math.ceil(d.getMinutes() / 30)) * 30)))(new Date()).toISOString();

  payment: string;
  brandModel: string;
  sortType: string;
  priceMin: number;
  priceMax: number;
  types: string;
  make: string;
  model: string;
  yearMin: number;
  yearMax: number;
  features: string;
  colors: string;
  transmission: string;

  dropOffLocationLat = null;
  dropOffLocationLng = null;
  dropOffAddress = ALL_LOCATIONS;

  returnPickupLocationLat = null;
  returnPickupLocationLng: number;
  returnPickupAddress = ALL_LOCATIONS;

  returnDropOffLocationLat = null;
  returnDropOffLocationLng = null;
  returnDropOffAddress = ALL_LOCATIONS;

  roundTripSecondStartDate = moment().add(2, 'days').add(1, 'hours').startOf('hours').format(DATETIME_FORMATS.DATE_FORMAT);
  islocationSwitch = false;
  isTransferBackToAirport = false;
}
