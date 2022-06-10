import { IBookingViewModel, BookingViewModel } from '../view-model/booking-view.model';
import { InvoiceDetail, IInvoiceDetail } from '../../billing-models/invoiceDetail';

export interface IBookingResponseModel {
  booking: IBookingViewModel;
  invoice: IInvoiceDetail;
  paymentRolledBack: boolean;

}

export class BookingResponseModel implements IBookingResponseModel {
  booking = new BookingViewModel();
  invoice = new InvoiceDetail();
  paymentRolledBack: boolean;
}
