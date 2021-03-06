import { IKeyValue } from './key-value';
import { ILocation } from './location';
import { IPicture, Picture } from './picture';
import { IDeliveryLocation } from './deliveryLocation';
import { IDocument } from './document';
import { IAssetDiscountChartConfigs } from './assetDiscountChartConfigs';
import { IIndividualOwner, IndividualOwner } from './individual-owner';
import { ICorporateOwner, CorporateOwner } from './corporate-owner';
import { IAssetBooking } from './asset-booking.model';

export interface IAsset {
  _id: string;
  booking: IAssetBooking[];
  _makeId: string;
  makeName: string;
  _modelId: string;
  assetModelName: string;
  _subModelId: string;
  subModelName: string;
  numberOfSeats: number;
  numberOfDoors: number;
  fuelTypes: IKeyValue[];
  assetTypeCode: string;
  assetTypeDisplayName: string;
  modelYear: number;
  isAutomaticTransmission: boolean;
  mileage: number;
  description: string;
  gpsTypeCode: string;
  gpsTypeDisplayName: string;
  colorCode: string;
  colorDisplayName: string;
  features: IKeyValue[];
  licensePlateNumber: string;
  issuingCountryCode: string;
  issuingCountryDisplayName: string;
  registeredYear: number;
  dailyPrice: number;
  monthlyPrice: number;
  isInstantBookingAvailable: boolean;
  rentalCategoryCode: string;
  rentalCategoryDisplayName: string;
  locationName: string;
  location: ILocation;
  pictures: IPicture[];
  isDeliveryServiceAvailable: boolean;
  isCorporateOwner: boolean;
  ownerFirstName: string;
  ownerLastName: string;
  ownerDateOfBirth: string;
  ownerLicenseId: string;
  ownerLicenseIssuingCountryCode: string;
  ownerLicenseIssuingCountryDisplayName: string;
  ownerCitizenshipCountryCode: string;
  ownerCitizenshipCountryDisplayName: string;
  ownerNationalIdOrPassport: string;
  ownerCompanyName: string;
  ownerCompanyEstablishDate: string;
  ownerCompanyTaxNumber: string;
  ownerCompanyAddress: string;
  ownerCompanyContactPerson: string;
  ownerCompanyContactPersonNumber: string;
  ownerProfileImage: string;
  vinNumber: string;
  engineCode: string;
  engineSerialNumber: string;
  countryOfOriginCode: string;
  countryOfOriginDisplayName: string;
  dateOfProduction: string;
  transmissionSerialNumber: string;
  plantCode: string;
  unAvailableDates: string[];
  bookedDates: string[];
  dailyDistanceLimitCode: string;
  dailyDistanceLimitDisplayName: string;
  dailyDistanceLimitValue: number;
  monthlyDistanceLimitCode: string;
  monthlyDistanceLimitDisplayName: string;
  monthlyDistanceLimitValue: number;
  deliveryLocations: IDeliveryLocation[];
  isDeliveryWithinRadiusEnabled: boolean;
  deliveryWithinRadiusCode: string;
  deliveryWithinRadiusDisplayName: string;
  deliveryWithinRadiusValue: number;
  priceForDeliveringWithinRadius: number;
  deliveryDetails: string;
  minDaysToRentCode: string;
  minDaysToRentDisplayName: string;
  minDaysToRentValue: number;
  maxDaysToRentCode: string;
  maxDaysToRentDisplayName: string;
  maxDaysToRentValue: number;
  driverSpokenLanguages: IKeyValue[];
  documents: IDocument[];
  agreedTermsAndConditionsCopy: string;
  isAvailableForSelling: boolean;
  isInsuranceRequired: boolean;
  _ownerId: string;
  ownerName: string;
  ownerTypeCode: string;
  ownerTypeDisplayName: string;
  isActive: boolean;
  createdOn: string;
  updatedOn: string;
  segmentId: string;
  engineSize: number;
  hourlyPrice: number;
  weeklyPrice: number;
  city: string;
  forOccasion: boolean;
  forCorporate: boolean;
  rentalCount: number;
  isSuccess: boolean;
  slug: string;
  note: string;
  deliveryDiscount: number;
  deliveryGuestLocation: number;
  deliveryGuestLocationPrice: number;
  isGuestLocation: boolean;
  indexValue: number;
  isBan: boolean;
  behaviorRating: number;
  deviceId: string;
  statusCode: string;
  statusDisplayName: string;
  isComplete: boolean;
  isUnlist: boolean;
  defaultImage: IPicture;
  canBeProvidedAnyTime: boolean;
  additionalDistanceAmountValue: number;
  isDeliveryOnCustomLocationEnabled: boolean;
  makePlusModelIndex: string;
  canBeProvidedFrom: string;
  canBeProvidedTo: string;
  isBackupCar: boolean;
  totalCompletedTrips: number;
  avgStarRating: number;
  totalReviews: number;
  numberOfTrips: number;
  ownerDiscounts: IAssetDiscountChartConfigs[];
  ownerDayDiscounts: IAssetDiscountChartConfigs[];
  ownerSpecialDiscounts: IAssetDiscountChartConfigs[];
  originalPerDayPrice: number;
  discountPercentage: number;
  individualOwner: IIndividualOwner;
  corporateOwner: ICorporateOwner;
  numberOfBaggages: number;
  registrationStatus: string;
  advanceNoticeTypeCode: string;
  advanceNoticeTypeDisplayName: string;
  advanceNoticeValue: number;
  advanceNoticeInHours: number;
  advanceNoticeTimeUnit: string;
  state: boolean;
}

export class Asset implements IAsset {
  '_id': string;
  booking = [];
  '_makeId' = '';
  makeName = '';
  '_modelId' = '';
  assetModelName = '';
  '_subModelId' = '';
  subModelName = '';
  numberOfSeats = 0;
  numberOfDoors = 0;
  fuelTypes = [];
  'assetTypeCode' = '';
  assetTypeDisplayName = '';
  modelYear = 0;
  isAutomaticTransmission = true;
  mileage = 0;
  description = '';
  'gpsTypeCode' = '';
  gpsTypeDisplayName = '';
  'colorCode' = '';
  colorDisplayName = '';
  features = [];
  licensePlateNumber = '';
  'issuingCountryCode' = '';
  issuingCountryDisplayName = '';
  registeredYear = 0;
  dailyPrice = 0;
  monthlyPrice = 0;
  isInstantBookingAvailable = false;
  rentalCategoryCode = '';
  rentalCategoryDisplayName = '';
  locationName: '';
  location = { type: 'Point', coordinates: [0, 0] };
  pictures = [];
  isDeliveryServiceAvailable = false;
  isCorporateOwner = false;
  ownerFirstName = '';
  ownerLastName = '';
  ownerDateOfBirth = '';
  ownerLicenseId = '';
  ownerLicenseIssuingCountryCode = '';
  ownerLicenseIssuingCountryDisplayName = '';
  ownerCitizenshipCountryCode = '';
  ownerCitizenshipCountryDisplayName = '';
  ownerNationalIdOrPassport = '';
  ownerCompanyName = '';
  ownerCompanyEstablishDate = '';
  ownerCompanyTaxNumber = '';
  ownerCompanyAddress = '';
  ownerCompanyContactPerson = '';
  ownerCompanyContactPersonNumber = '';
  ownerProfileImage: string;
  vinNumber = '';
  engineCode = '';
  engineSerialNumber = '';
  'countryOfOriginCode' = '';
  countryOfOriginDisplayName = '';
  dateOfProduction = '';
  transmissionSerialNumber = '';
  plantCode = '';
  unAvailableDates = [];
  bookedDates = [];
  dailyDistanceLimitCode = '';
  dailyDistanceLimitDisplayName = '';
  dailyDistanceLimitValue = 0;
  monthlyDistanceLimitCode = '';
  monthlyDistanceLimitDisplayName = '';
  monthlyDistanceLimitValue = 0;
  deliveryLocations = [];
  isDeliveryWithinRadiusEnabled = false;
  deliveryWithinRadiusCode = '';
  deliveryWithinRadiusDisplayName = '';
  deliveryWithinRadiusValue = 0;
  priceForDeliveringWithinRadius = 0;
  deliveryDetails = '';
  minDaysToRentCode = '';
  minDaysToRentDisplayName = '';
  minDaysToRentValue = 0;
  maxDaysToRentCode = '';
  maxDaysToRentDisplayName = '';
  maxDaysToRentValue = 0;
  driverSpokenLanguages = [];
  documents = [];
  agreedTermsAndConditionsCopy = '';
  isAvailableForSelling = false;
  isInsuranceRequired = false;
  '_ownerId' = '';
  ownerName = '';
  ownerTypeCode = '';
  ownerTypeDisplayName = '';
  isActive = true;
  createdOn = '';
  updatedOn = '';
  segmentId = '';
  engineSize = 0;
  hourlyPrice = 0;
  weeklyPrice = 0;
  city = '';
  forOccasion = false;
  forCorporate = false;
  rentalCount = 0;
  isSuccess = false;
  slug = '';
  note = '';
  deliveryDiscount = 0;
  deliveryGuestLocation = 0;
  deliveryGuestLocationPrice = 0;
  isGuestLocation = false;
  indexValue = 0;
  isBan = false;
  behaviorRating = 0;
  deviceId = '';
  statusCode: string;
  statusDisplayName: string;
  isComplete = true;
  isUnlist = false;
  defaultImage = new Picture();
  calculatedDistance: number;
  canBeProvidedAnyTime = true;
  additionalDistanceAmountValue = 0;
  isDeliveryOnCustomLocationEnabled = false;
  makePlusModelIndex = '';
  canBeProvidedFrom = '00:00';
  canBeProvidedTo = '00:00';
  isBackupCar = false;
  totalCompletedTrips = 0;
  avgStarRating = 0;
  totalReviews = 0;
  numberOfTrips = 0;
  ownerDiscounts: [];
  ownerDayDiscounts: IAssetDiscountChartConfigs[];
  ownerSpecialDiscounts: IAssetDiscountChartConfigs[];
  originalPerDayPrice: number;
  discountPercentage: number;
  individualOwner = new IndividualOwner();
  corporateOwner = new CorporateOwner();
  numberOfBaggages = 0;
  registrationStatus = '';
  advanceNoticeTypeCode = '';
  advanceNoticeTypeDisplayName = '';
  advanceNoticeValue = 0;
  advanceNoticeInHours = 0;
  advanceNoticeTimeUnit = '';
  state = false;
}
