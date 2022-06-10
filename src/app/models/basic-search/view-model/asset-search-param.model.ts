import { PAGE_NO, PAGE_SIZE } from '../../../constants';

export interface IAssetSearchParams {
  makePlusModelIndex: string;
  rentalCategoryCode: string;
  assetTypeCode: string;
  locationName: string;
  registrationStatus: string;
  statusCode: string;
  fromDate: string;
  toDate: string;
  isUnlist: boolean;
  dailyPriceMin: number;
  dailyPriceMax: number;
  pageNo: number;
  pageSize: number;

}

export class AssetSearchParams implements IAssetSearchParams {
  makePlusModelIndex = '';
  rentalCategoryCode = '';
  assetTypeCode = '';
  locationName = '';
  registrationStatus = '';
  statusCode = '';
  fromDate: '';
  toDate: '';
  isUnlist: null;
  dailyPriceMin = 0;
  dailyPriceMax = 0;
  pageNo = +PAGE_NO;
  pageSize = +PAGE_SIZE;
}
