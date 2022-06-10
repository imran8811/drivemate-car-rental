import { IDriverAT, DriverAT } from './driver.model';
import { ILocationAT, LocationAT } from './location.model';
import { IRentAT, RentAT } from './rent.model';
import { ITaxInvoice, TaxInvoice } from './tax-invoice.model';

export interface IAirportTransferBooking {
  _assetId: string;
  _primaryAssetId: string;
  _primaryAssetOwnerId: string;
  bookingId: string;
  dayHold: number;
  documentsUploaded: boolean;
  isBookingForSomeoneElse: boolean;
  driver: IDriverAT;
  flightNumber: string;

  isTaxInvoiceRequired: boolean;
  taxInvoiceRecipient: ITaxInvoice;

  message: string;
  numberOfAssets: number;
  ownerTypeCode: string;
  ownerTypeDisplayName: string;
  pickNDropsCount: number;
  rent: IRentAT;

  pickupAddress: string;
  pickupLocation: ILocationAT;

  dropOffAddress: string;
  dropOffLocation: ILocationAT;

  returnPickupAddress: string;
  returnPickupLocation: ILocationAT;

  returnDropOffAddress: string;
  returnDropOffLocation: ILocationAT;

  startDate: string;
  endDate: string;

  renterName: string;
  ownerName: string;
}

export class AirportTransferBooking implements IAirportTransferBooking {
  '_assetId' = '';
  '_primaryAssetId' = '';
  '_primaryAssetOwnerId' = '';
  bookingId: string;
  dayHold = 0;
  documentsUploaded = false;
  isBookingForSomeoneElse = false;
  driver = new DriverAT();
  flightNumber = '';

  isTaxInvoiceRequired = false;
  taxInvoiceRecipient = new TaxInvoice();

  message = '';
  numberOfAssets = 0;
  ownerTypeCode = '';
  ownerTypeDisplayName = '';
  pickNDropsCount = 0;
  rent = new RentAT();

  pickupLocation = new LocationAT();
  pickupAddress = '';

  dropOffLocation = new LocationAT();
  dropOffAddress = '';

  returnDropOffLocation = new LocationAT();
  returnDropOffAddress = '';

  returnPickupLocation = new LocationAT();
  returnPickupAddress = '';

  startDate = '';
  endDate = '';

  renterName = '';
  ownerName = '';
}
