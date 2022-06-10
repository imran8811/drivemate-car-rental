export interface ISuggestedPrices {
  minimum: number;
  average: number;
  maximum: number;
  sliderMinimumValue: number;
  sliderMaximumValue: number;
}

export class SuggestedPrices implements ISuggestedPrices {
  minimum = 0;
  average = 0;
  maximum = 0;
  sliderMinimumValue = 0;
  sliderMaximumValue = 0;
}

export interface IAssetSuggestedPrice {
  daily: ISuggestedPrices;
  monthly: ISuggestedPrices;
}

export class AssetSuggestedPrice implements IAssetSuggestedPrice {
  daily = new SuggestedPrices();
  monthly = new SuggestedPrices();
}
