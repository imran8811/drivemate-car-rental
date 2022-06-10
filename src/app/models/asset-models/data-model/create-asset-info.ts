import { IPicture } from './picture';
import { IDocument } from './document';
import { ILocation } from './location';

export interface ICreateAssetInfo {
    _id: string;
    pictures: IPicture[];
    documents: IDocument[];
    agreedTermsAndConditionsCopy: boolean;
    location: ILocation;
    locationName: string;
    licensePlateNumber: string;
    issuingCountryCode: string;
    issuingCountryDisplayName: string;
    registeredYear: number;
    engineCode: string;
    engineSerialNumber: string;
    countryOfOriginCode: string;
    countryOfOriginDisplayName: string;
    dateOfProduction: string;
    transmissionSerialNumber: string;
    plantCode: string;
    vinNumber: string;
    dailyPrice: number;
    monthlyPrice: number;
    rentalCategoryCode: string;
}
export class CreateAssetInfo implements ICreateAssetInfo {
    '_id': string;
    pictures = [];
    documents = [];
    agreedTermsAndConditionsCopy = true;
    location = { type: 'Point', coordinates: [0, 0] };
    locationName = '';
    licensePlateNumber = '';
    issuingCountryCode = '';
    issuingCountryDisplayName = '';
    registeredYear = 0;
    engineCode = '';
    engineSerialNumber = '';
    countryOfOriginCode = '';
    countryOfOriginDisplayName = '';
    dateOfProduction = '';
    transmissionSerialNumber = '';
    plantCode = '';
    vinNumber = '';
    dailyPrice = 0;
    monthlyPrice = 0;
    rentalCategoryCode = '';
}
