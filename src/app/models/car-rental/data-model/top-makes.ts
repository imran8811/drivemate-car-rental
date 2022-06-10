export interface ITopMakes {
    _id: string;
    numberOfAssets: string;
    assetTypeCode: string;
}

export class TopMakes implements ITopMakes {
    _id = '';
    numberOfAssets = '';
    assetTypeCode = '';
}