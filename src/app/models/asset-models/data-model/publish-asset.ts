export interface IPublishAsset {
    _id: string;
    isAvailableForSelling: boolean;
    rentalCategoryCode: string;
}
export class PublishAsset implements IPublishAsset {
    '_id': string;
    isAvailableForSelling = false;
    rentalCategoryCode: string;
}

