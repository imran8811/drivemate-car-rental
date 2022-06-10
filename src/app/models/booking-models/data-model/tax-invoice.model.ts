export interface ITaxInvoice {
  customerTypeCode: string;
  customerTypeDisplayName: string;
  name: string;
  address: string;
  taxId: string;
  branchNumber: string;
  branchName: string;
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
  branchName: string;
  corporateOfficeTypeCode: string;
  corporateOfficeTypeDisplayName: string;
  isWHTRefundNeeded = false;
}
