import { IKeyValue } from '../../asset-models/data-model/key-value';

export interface IUserDocument {
  _id: string;
  _documentTypeId: string;
  _uploadedBy: string;
  isBackOfficeUpload: boolean;
  isVerified: boolean;
  name: string;
  uploadedAt: string;
  uploadedByName: string;
  path: string;
  code: string;
  displayName: string;
}
export class UserDocument implements IUserDocument {
  '_id': string;
  '_documentTypeId' = '';
  '_uploadedBy' = '';
  isBackOfficeUpload = false;
  isVerified = false;
  name = '';
  uploadedAt = '';
  uploadedByName = '';
  path = '';
  code = '';
  displayName = '';
}
export interface IPaymentModes {
  code: string;
  displayName: string;
}
export class PaymentModes implements IPaymentModes {
  code = '';
  displayName = '';
}
export interface IOwner {
  averageResponseTime: number;
  noOfBookingsUpdated: number;
  paymentModes: IPaymentModes[];
  status: string;
  commissionPercentage: number;
  isDepositRequired: boolean;
  ownerTypeCode: number;
  ownerTypeDisplayName: number;
  responseRate: number;
  acceptanceRate: number;
  includedInsurances: IKeyValue[];
  isInsuranceRequired: boolean;
  isInsuranceRequiredConfigurable: boolean;
  avgStarRating: number;
  totalReviews: number;
}
export class Owner implements IOwner {
  averageResponseTime = 0;
  noOfBookingsUpdated = 0;
  paymentModes = [];
  status = '';
  commissionPercentage = 0;
  isDepositRequired = false;
  ownerTypeCode = 0;
  ownerTypeDisplayName = 0;
  responseRate = 0;
  acceptanceRate = 0;
  includedInsurances = [];
  isInsuranceRequired = true;
  isInsuranceRequiredConfigurable = true;
  avgStarRating: number;
  totalReviews: number;
}
export interface IUserRenter {
  _id: string;
  status: string;
  avgStarRating: number;
  totalReviews: number;
}
export class UserRenter implements IUserRenter {
  '_id': string;
  status = '';
  avgStarRating: number;
  totalReviews: number;
}
export interface IDevice {
  _id: string;
}
export class Device implements IDevice {
  '_id': string;
}
export interface IPhoneNumberVerification {
  _id: string;
  pinCode: number;
  resendPinAttemptsLeft: number;
  incorrectPinAttemptsLeft: number;
  pinCreatedOn: string;
  pinExpiredOn: string;
}
export class PhoneNumberVerification implements IPhoneNumberVerification {
  '_id': string;
  pinCode = 0;
  resendPinAttemptsLeft = 0;
  incorrectPinAttemptsLeft = 0;
  pinCreatedOn = '';
  pinExpiredOn = '';
}
export interface IUserEmailVerified {
  _id: string;
  token: string;
  maxAttemptsAllowed: number;
  createdOn: string;
  isTokenExpired: boolean;
  expiredInMinutes: number;
  verifyUrl: string;
}
export class UserEmailVerified implements IUserEmailVerified {
  '_id': string;
  token = '';
  maxAttemptsAllowed = 0;
  createdOn = '';
  isTokenExpired = false;
  expiredInMinutes = 0;
  verifyUrl = '';
}
export interface IUser {
  _id: string;
  emailVerificationStatus: string;
  phoneNumberVerificationStatus: string;
  totalRewardPoints: number;
  assetCount: number;
  bookingRequestsCount: number;
  confirmedBookingsCount: number;
  declinedBookingsCount: number;
  userID: string;
  type: string;
  email: string;
  phoneNumber: string;
  profilePicture: string;
  firstName: string;
  lastName: string;
  joiningDate: string;
  countryCode: string;
  countryDisplayName: string;
  stateCode: string;
  stateDisplayName: string;
  ownerTypeCode: string;
  ownerTypeDisplayName: string;
  about: string;
  companyName: string;
  dateOfBirth: string;
  establishmentDate: string;
  gender: string;
  home: string;
  officialAddress: string;
  taxNo: string;
  work: string;
  defaultLanguageCode: string;
  defaultLanguageDisplayName: string;

  docs: IUserDocument[];
  owner: IOwner;
  renter: IUserRenter;
  devices: IDevice[];
  phoneNumberVerification: IPhoneNumberVerification;
  emailVerification: IUserEmailVerified;

  isCorporateUser: boolean;
  isGuestUser: boolean;
  firstTimeUser: boolean;
}
export class User implements IUser {
  '_id': string;
  emailVerificationStatus = '';
  phoneNumberVerificationStatus = '';
  totalRewardPoints = 0;
  assetCount = 0;
  bookingRequestsCount = 0;
  confirmedBookingsCount = 0;
  declinedBookingsCount = 0;
  userID = '';
  type = '';
  email = '';
  phoneNumber = '';
  profilePicture = '';
  firstName = '';
  lastName = '';
  joiningDate = '';
  countryCode = '';
  countryDisplayName = '';
  stateCode = '';
  stateDisplayName = '';
  ownerTypeCode = '';
  ownerTypeDisplayName = '';
  about = '';
  companyName = '';
  dateOfBirth = '';
  establishmentDate = '';
  gender = '';
  home = '';
  officialAddress = '';
  taxNo = '';
  work = '';
  defaultLanguageCode = '';
  defaultLanguageDisplayName = '';

  docs = [];
  owner = new Owner();
  renter = new UserRenter();
  devices = [];
  phoneNumberVerification = new PhoneNumberVerification();
  emailVerification = new UserEmailVerified();

  isCorporateUser: boolean;
  isGuestUser: boolean;
  firstTimeUser: boolean;
}
