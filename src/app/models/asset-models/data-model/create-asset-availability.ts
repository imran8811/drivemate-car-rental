export interface ICreateAssetAvailability {
    _id: string;
    unAvailableDates: string[];
}
export class CreateAssetAvailability implements ICreateAssetAvailability {
    '_id': string;
    unAvailableDates = [];
}

