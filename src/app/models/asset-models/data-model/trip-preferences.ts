import { IKeyValue } from './key-value';

export interface ITripPreferences {
    minDaysToRentValue: number;
    maxDaysToRentValue: number;
    driverSpokenLanguages: IKeyValue[];
    dailyDistanceLimitValue: number;
    monthlyDistanceLimitValue: number;
    rentalCategoryCode: string;
    rentalCategoryDisplayName: string;
    additionalDistanceAmountValue: number;
    advanceNoticeTypeCode: string;
    advanceNoticeTypeDisplayName: string;
    advanceNoticeValue: number;
    advanceNoticeInHours: number;
    advanceNoticeTimeUnit: string;
}

export class TripPreferences {
    minDaysToRentValue = 0;
    maxDaysToRentValue = 0;
    driverSpokenLanguages = [];
    dailyDistanceLimitValue = 0;
    monthlyDistanceLimitValue = 0;
    rentalCategoryCode = '';
    rentalCategoryDisplayName = '';
    additionalDistanceAmountValue = 0;
    advanceNoticeTypeCode = '';
    advanceNoticeTypeDisplayName = '';
    advanceNoticeValue = 0;
    advanceNoticeInHours = 0;
    advanceNoticeTimeUnit = '';
}
