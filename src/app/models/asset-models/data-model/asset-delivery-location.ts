import { IDeliveryLocation } from './deliveryLocation';
import { ILocation } from './location';

export interface IAssetDeliveryLocation {
    isDeliveryServiceAvailable: boolean;
    deliveryLocations: IDeliveryLocation[];
    canBeProvidedAnyTime: boolean;
    locationName: string;
    isDeliveryOnCustomLocationEnabled: boolean;
    canBeProvidedFrom: string;
    canBeProvidedTo: string;
    rentalCategoryCode: string;
    location: ILocation;
}


export class AssetDeliveryLocation {
    isDeliveryServiceAvailable = false;
    deliveryLocations = [];
    canBeProvidedAnyTime = true;
    locationName: '';
    isDeliveryOnCustomLocationEnabled: false;
    canBeProvidedFrom = '00:00';
    canBeProvidedTo = '00:00';
    rentalCategoryCode = '';
    location = { type: 'Point', coordinates: [0, 0] };
}
