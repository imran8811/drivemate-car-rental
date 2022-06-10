export interface IQuotation {
  quotationId: string;
}

export class Quotation implements IQuotation {
  quotationId = '';
}

export interface ITaxInformation {
  _id: string;
  _taxTypeId: string;
  taxTypeName: string;
  countryName: string;
  stateName: string;
  _customerTypeId: string;
  customerTypeName: string;
  taxPercentage: number;
  effect: number;
  active: boolean;
  created_date: string;
}

export interface IQuotationModel {
  _id: string;
  _assetId: string;
  startDate: string;
  endDate: string;
  pricePerDay: number;
  insurancePerDay: number;
  deliveryFee: number;
  promoCode: string;
  promoDiscount: number;
  rewardPointsApplied: number;
  rewardPointRate: number;
  rewardDisc: number;
  serviceFee: number;
  serviceFeeRate: number;
  discount: number;
  discountPercentage: number;
  deposit: number;
  tripAmount: number;
  taxInfo: ITaxInformation[];
  ownerEarning: number;
  platformComission: number;
  taxOnOwnerEarning: number;
  platformComissionPct: number;
  taxOnOwnerEarningPct: number;
  totalInsurance: number;
  totalPrice: number;
  tripDays: number;
  selectedInsuranceTypeCode: string;
  isInsuranceIncluded: boolean;
  depositMessage: string;
  errorMessage: string;
}

export class QuotationModel implements IQuotationModel {
  '_id' = '';
  '_assetId' = '';
  startDate = '';
  endDate = '';
  pricePerDay = 0;
  insurancePerDay = 0;
  deliveryFee = 0;
  promoCode = '';
  promoDiscount = 0;
  rewardPointsApplied = 0;
  rewardPointRate = 0;
  rewardDisc = 0;
  serviceFee = 0;
  serviceFeeRate = 0;
  discount = 0;
  discountPercentage = 0;
  deposit = 0;
  tripAmount = 0;
  taxInfo = [];
  ownerEarning = 0;
  platformComission = 0;
  taxOnOwnerEarning = 0;
  platformComissionPct = 0;
  taxOnOwnerEarningPct = 0;
  totalInsurance = 0;
  totalPrice = 0;
  tripDays = 0;
  selectedInsuranceTypeCode = '';
  isInsuranceIncluded = false;
  depositMessage = '';
  errorMessage = '';
}
