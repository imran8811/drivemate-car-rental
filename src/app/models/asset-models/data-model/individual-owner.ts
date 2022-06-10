export interface IIndividualOwner {
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

export class IndividualOwner implements IIndividualOwner {
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
