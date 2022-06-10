import { ICancellationRule, CancellationRule } from './cancellationRule.model';

export interface ICancellationCharges {
  deductionAmount: number;
  appliedRule: ICancellationRule;
}

export class CancellationCharges implements ICancellationCharges {
  deductionAmount = 0;
  appliedRule = new CancellationRule();
}
