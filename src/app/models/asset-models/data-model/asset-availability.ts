export interface IAssetAvailability {
    unAvailableDates: string[];
    bookedDates: string[];
    rentalCategoryCode: string;
}

export class AssetAvailability implements IAssetAvailability {

    unAvailableDates = [];
    bookedDates = [];
    rentalCategoryCode = '';
}
