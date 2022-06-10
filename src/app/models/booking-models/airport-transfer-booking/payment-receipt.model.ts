export interface IPaymentReceipt {
  _documentTypeId: string;
  _uploadedBy: string;
  isBackOfficeUpload: boolean;
  isVerified: boolean;
  name: string;
  uploadedAt: string;
  uploadedByName: string;
}

export class PaymentReceipt implements IPaymentReceipt {
  '_documentTypeId' = '';
  '_uploadedBy' = '';
  isBackOfficeUpload = false;
  isVerified = false;
  name = '';
  uploadedAt = '';
  uploadedByName = '';
}
