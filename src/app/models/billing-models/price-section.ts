import { ITaxInfo } from './taxInfo';

export interface IPriceSection {
  pricePerDay: number;
  discount: number;
  deposit: number;
  depositMessage: string;
  insurancePerDay: number;
  totalPrice: number;
  tripAmount: number;
  tripDays: number;
  totalInsurance: number;
  isInsuranceIncluded: boolean; // if true then 'Provided by owner'
  taxInfo: ITaxInfo[];
  rewardPointsApplied: number;
  rewardPointRate: number;
  rewardDisc: number;
  promoCode: string;
  totalAppliedDiscount: number;
  discountedTripAmount: number;
  promoDiscount: number;
  tripPrice: number;
  totalPriceWithoutDiscount: number;
  originalPerDayPrice: number;
  discountPercentage: number;
  numberOfAssets: number;
  pickNDropsCount: number;
}

export class PriceSection implements IPriceSection {
  pricePerDay = 0;
  discount = 0;
  deposit = 0;
  depositMessage = '';
  insurancePerDay = 0;
  totalPrice = 0;
  tripAmount = 0;
  tripDays = 0;
  totalInsurance = 0;
  isInsuranceIncluded = false;
  taxInfo = [];
  rewardPointsApplied = 0;
  rewardPointRate = 0;
  rewardDisc = 0;
  promoCode = '';
  totalAppliedDiscount = 0;
  discountedTripAmount = 0;
  promoDiscount = 0;
  tripPrice = 0;
  totalPriceWithoutDiscount = 0;
  originalPerDayPrice: number;
  discountPercentage: number;
  numberOfAssets = 0;
  pickNDropsCount = 0;
}
