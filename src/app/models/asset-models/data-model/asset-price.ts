import { ILocation } from './location';

export interface IAssetPrice {
    _id: string;
    assetModelName: string;
    makeName: string;
    modelYear: number;
    dailyPrice: number;
    monthlyPrice: number;
    isInstantBookingAvailable: boolean;
    _makeId: string;
    _modelId: string;
    _subModelId: string;
    rentalCategoryCode: string;
    location: ILocation;
    locationName: string;
}

export class AssetPrice implements IAssetPrice {
    _id: string;
    assetModelName: '';
    '_makeId' = '';
    '_modelId' = '';
    '_subModelId' = '';
    makeName: '';
    modelYear: 0;
    dailyPrice = 0;
    monthlyPrice = 0;
    isInstantBookingAvailable = false;
    rentalCategoryCode = '';
    location = { type: 'Point', coordinates: [0, 0] };
    locationName = '';
}
