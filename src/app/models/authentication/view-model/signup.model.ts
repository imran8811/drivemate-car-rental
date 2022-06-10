export interface ISignup {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  imagePath: string;
  termsAndCondition: boolean;
  isCorporateUser: boolean;
}

export class Signup implements ISignup {
  email = '';
  password = '';
  confirmPassword = '';
  firstName = '';
  lastName = '';
  countryCode = '';
  phoneNumber = '';
  imagePath = '';
  termsAndCondition = true;
  isCorporateUser = false;
}
