export interface ICreateAssetCorpOwner {
    name: string;
    taxNumber: string;
    establishDate: string;
    address: string;
    contactPersonName: string;
    contactPersonPhoneNumber: number;
}
export class CreateAssetCorpOwner implements ICreateAssetCorpOwner {
    name = '';
    taxNumber = '';
    establishDate = '';
    address = '';
    contactPersonName = '';
    contactPersonPhoneNumber = 0;
}

