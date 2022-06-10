
export interface IInvoice {
    status: string;
    _invoiceId: string;
    amount: number;
}

export class Invoice implements IInvoice {
    status = '';
    '_invoiceId' = '';
    amount = 0;
}
