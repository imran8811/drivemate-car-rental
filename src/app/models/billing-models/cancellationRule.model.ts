export interface ICancellationRule {
  ruleDescription: string;
  durationUnit: string;
  minDuration: number;
  maxDuration: number;
  occurance: string;
  event: string;
  penaltyType: string;
  rentFee: number;
  serviceFee: number;
  insuranceFee: number;
  deposit: number;
}

export class CancellationRule implements ICancellationRule {
  ruleDescription = '';
  durationUnit = '';
  minDuration = 0;
  maxDuration = 0;
  occurance = '';
  event = '';
  penaltyType = '';
  rentFee = 0;
  serviceFee = 0;
  insuranceFee = 0;
  deposit = 0;
}