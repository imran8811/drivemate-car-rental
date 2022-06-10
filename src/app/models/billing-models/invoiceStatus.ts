export interface IInvoiceStatus {
  depositAmount: number;
  depositPaymentCardId: string;
  invoiceStatusId: number;
  invoiceStatusName: string;
  rentPaymentCardId: string;
  totalRentAmount: number;
  displayStatus: string;
}

export class InvoiceStatus implements IInvoiceStatus {
  depositAmount: number;
  depositPaymentCardId: string;
  invoiceStatusId: number;
  invoiceStatusName: string;
  rentPaymentCardId: string;
  totalRentAmount: number;
  displayStatus: string;
}