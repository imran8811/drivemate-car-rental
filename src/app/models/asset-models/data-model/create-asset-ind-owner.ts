export interface ICreateAssetIndOwner {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    drivingLicenseId: string;
    drivingLicenseIssuingCountryCode: string;
    drivingLicenseIssuingCountryDisplayName: string;
    citizenshipCountryCode: string;
    citizenshipCountryDisplayName: string;
    nationalIdOrPassport: string;
}
export class CreateAssetIndOwner implements ICreateAssetIndOwner {
    firstName = '';
    lastName = '';
    dateOfBirth = '';
    drivingLicenseId = '';
    drivingLicenseIssuingCountryCode = '';
    drivingLicenseIssuingCountryDisplayName = '';
    citizenshipCountryCode = '';
    citizenshipCountryDisplayName = '';
    nationalIdOrPassport = '';
}

