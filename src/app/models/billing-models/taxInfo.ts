export interface ITaxInfo {
  _id: string;
  taxName: string;
  taxValue: number;
  taxPercentage: number;
}

export class TaxInfo implements ITaxInfo {
  _id = '';
  taxName = '';
  taxValue = 0;
  taxPercentage = 0;
}
