import { IEmailVerify, EmailVerify } from './email-verification';

export interface ISignupDataModel {
  _countryId: string;
  _stateId: string;
  countryName: string;
  email: string;
  firstName: string;
  joiningDate: string;
  lastName: string;
  phoneNumber: string;
  profilePicture: string;
  stateName: string;
  type: string;
  userID: string;
  emailVerify: IEmailVerify;
}

export class SignupDataModel implements ISignupDataModel {
  '_countryId' = '';
  '_stateId' = '';
  countryName = '';
  email = '';
  firstName = '';
  joiningDate = '';
  lastName = '';
  phoneNumber = '';
  profilePicture = '';
  stateName = '';
  type = '';
  userID = '';
  emailVerify = new EmailVerify();
}
