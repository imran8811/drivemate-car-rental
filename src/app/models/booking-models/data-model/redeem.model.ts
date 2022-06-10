export interface IRedeem {
  isRedeemPoint: boolean;
  redeemAmount: number;
  redeemPoint: number;
}

export class Redeem implements IRedeem {
  isRedeemPoint = false;
  redeemAmount = 0;
  redeemPoint = 0;
}
