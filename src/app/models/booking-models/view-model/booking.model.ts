import { IAsset, Asset } from '../../asset-models';
import { IQuotation, Quotation } from '../data-model/quotation';
import { PriceSection, IPriceSection } from '../../billing-models/price-section';
import { IBackupCar } from '../data-model/backup-car-model';
import { IBasicSearch, BasicSearch } from '../../basic-search/data-model/basic-search';
import { User, IUser } from '../../authentication';

export interface IBooking {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  makingBookingForSomeoneElse: boolean;
  driverFirstName: string;
  driverLastName: string;
  countryCode: string;
  phoneNumber: string;
  flightNumber: string;
  taxInvoiceReceiptNeeded: boolean;
  renterType: string;
  renterFullName: string;
  renterAddress: string;
  renterTaxId: string;
  officeTypeCode: string;
  branchNumber: string;
  branchName: string;
  officeTypeDisplayName: string;
  withholdingTaxRefund: boolean;
  protectionPackage: string;
  insureId: string;
  message: string;

  loggedInUserId: string;
  owner: IUser;
  basicSearch: IBasicSearch;
  asset: IAsset;
  backupCars: IBackupCar[];
  priceSection: IPriceSection;
}

export class Booking implements IBooking {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  makingBookingForSomeoneElse = false;
  driverFirstName = '';
  driverLastName = '';
  countryCode = '';
  phoneNumber = '';
  flightNumber = '';
  taxInvoiceReceiptNeeded = false;
  renterType = '';
  renterFullName = '';
  renterAddress = '';
  renterTaxId = '';
  officeTypeCode = '';
  branchNumber = '';
  branchName: string;
  officeTypeDisplayName = '';
  withholdingTaxRefund = false;
  protectionPackage = '';
  insureId = '';
  message = '';

  loggedInUserId = '';
  owner = new User();
  basicSearch = new BasicSearch();
  asset = new Asset();
  backupCars = [];
  priceSection = new PriceSection();
}
