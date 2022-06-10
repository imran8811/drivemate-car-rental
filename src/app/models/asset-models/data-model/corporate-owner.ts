export interface ICorporateOwner {
    name: string;
    taxNumber: string;
    establishDate: string;
    address: string;
    contactPersonName: string;
    contactPersonPhoneNumber: number;
}

export class CorporateOwner implements ICorporateOwner {
    name = '';
    taxNumber = '';
    establishDate = '';
    address = '';
    contactPersonName = '';
    contactPersonPhoneNumber = 0;
}
