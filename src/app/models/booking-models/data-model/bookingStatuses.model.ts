export interface IBookingStatusesModel {
  reason: string;
  _performedBy: string;
  performedAt: string;
  performedByUserName: string;
  performedByUserType: string;
}

export class BookingStatusesModel implements IBookingStatusesModel {
  reason = '';
  _performedBy = '';
  performedAt = '';
  performedByUserName = '';
  performedByUserType = '';
}
