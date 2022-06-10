export interface IInsurance {
  insuranceTypeCode: string;
  insuranceTypeDisplayName: string;
  insuranceTypeDescription: string;
  amount: number;
  isIncluded: boolean;
}

export class Insurance implements IInsurance {
  insuranceTypeCode = '';
  insuranceTypeDisplayName = '';
  insuranceTypeDescription = '';
  amount = 0;
  isIncluded = false;
}
