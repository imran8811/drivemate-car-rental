export interface IAssetDiscountChartConfigs {
  _id: string;
  _discountChartConfigId: string;
  _ownerId: string;
  discountType: string;
  discountPercentage: number;
  title: string;
  specialEventStartDate: string;
  specialEventEndDate: string;
  discountedDailyPrice: number;
  minimumDays: number;
  maximumDays: number;
}

export class AssetDiscountChartConfigs implements IAssetDiscountChartConfigs {
  _id: string;
  _discountChartConfigId: string;
  _ownerId = '';
  discountType = '';
  discountPercentage = 0;
  title = '';
  specialEventStartDate = '';
  specialEventEndDate = '';
  discountedDailyPrice = 0;
  minimumDays = 0;
  maximumDays = 0;
}
