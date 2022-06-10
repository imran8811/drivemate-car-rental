export interface ITaxInvoice {
  customerTypeCode: string;
  customerTypeDisplayName: string;
  name: string;
  address: string;
  taxId: string;
  branchNumber: string;
  corporateOfficeTypeCode: string;
  corporateOfficeTypeDisplayName: string;
  isWHTRefundNeeded: boolean;
}

export class TaxInvoice implements ITaxInvoice {
  customerTypeCode = '';
  customerTypeDisplayName = '';
  name = '';
  address = '';
  taxId = '';
  branchNumber = '';
  corporateOfficeTypeCode: string;
  corporateOfficeTypeDisplayName: string;
  isWHTRefundNeeded = false;
}
