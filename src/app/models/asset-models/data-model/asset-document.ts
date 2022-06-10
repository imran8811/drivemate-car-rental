import { IDocument } from './document';

export interface IAssetDocument {
    documents: IDocument[];
    rentalCategoryCode: string;
}

export class AssetDocument implements IAssetDocument {
    documents: [];
    rentalCategoryCode = '';
}
