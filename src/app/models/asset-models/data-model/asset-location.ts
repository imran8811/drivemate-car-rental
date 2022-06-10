
import { ILocation } from './location';

export interface IAssetLocation {
    locationName: string;
    location: ILocation;
    licensePlateNumber: string;
    issuingCountryCode: string;
    issuingCountryDisplayName: string;
    registeredYear: number;
    rentalCategoryCode: string;
}

export class AssetLocation {
    locationName: '';
    location = { type: 'Point', coordinates: [0, 0] };
    licensePlateNumber = '';
    issuingCountryDisplayName = '';
    issuingCountryCode = '';
    registeredYear = 0;
    rentalCategoryCode: string;

}
