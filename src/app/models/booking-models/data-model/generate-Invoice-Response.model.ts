import { ITaxInvoice } from './tax-invoice.model';

export interface IGenerateInvoiceResponse {
  taxInvoiceUrl: string;
  taxInvoiceRecipient: ITaxInvoice;
  isTaxInvoiceRequired: boolean;
}
