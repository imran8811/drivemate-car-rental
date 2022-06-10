export interface ITopBrands {
    _id: string;
    numberOfAssets: string;
    makeName: string;
}

export class TopBrands implements ITopBrands {
    _id = '';
    numberOfAssets = '';
    makeName = '';
}