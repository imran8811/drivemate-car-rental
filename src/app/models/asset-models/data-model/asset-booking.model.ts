export interface IAssetBooking {
    _id: string,
    status: string,
    bookingId: string,
    _memberId: string,
    startDate: Date,
    endDate: Date,
    _assetId: string,
    _assetOwnerId: string
}

export class AssetBooking implements IAssetBooking {
    _id = '';
    status = '';
    bookingId = '';
    _memberId = '';
    startDate =  new Date();
    endDate = new Date();
    _assetId = '';
    _assetOwnerId = '';
}
