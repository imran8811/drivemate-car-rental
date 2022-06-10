export interface IPaymentReceipt {
  _documentTypeId: string;
  isBackOfficeUpload: boolean;
  name: string;
  code: string;
  displayName: string;
  isVerified: boolean;
  path: string;
}

export class PaymentReceipt implements IPaymentReceipt {
  '_documentTypeId' = '';
  isBackOfficeUpload = false;
  name = '';
  code = '';
  displayName = '';
  isVerified = false;
  path = '';
}

export interface IImageUploadingDto {
  bookingId: string;
  bookingVersion: string;
  paymentReceipt: IPaymentReceipt;
}

export class ImageUploadingDto implements IImageUploadingDto {
  bookingId = '';
  bookingVersion = '';
  paymentReceipt = new PaymentReceipt();
}
