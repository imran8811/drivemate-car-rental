export interface IOwnerEarningSummary {
    totalEarning: number;
    monthToDateEarning: number;
    missedEarning: number;
}

export class OwnerEarningSummary implements IOwnerEarningSummary {
    totalEarning = 0;
    monthToDateEarning = 0;
    missedEarning = 0;
}