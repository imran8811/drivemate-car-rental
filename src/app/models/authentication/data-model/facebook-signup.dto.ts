export interface IFacebookSignupDto {
  countryCode: string;
  phoneNumber: string;
  termsAndCondition: boolean;
  isCorporateUser: boolean;
  email: string;
  imagePath: string;
  name: string;
  firstName: string;
  lastName: string;
  socialProvider: {
    token: string;
    id: string;
    provider: string;
  }
}

export class FacebookSignupDto implements IFacebookSignupDto {
  countryCode = '';
  phoneNumber = '';
  termsAndCondition = false;
  isCorporateUser = false;
  email = '';
  imagePath = '';
  name = '';
  firstName = '';
  lastName = '';
  socialProvider = {
    token: '',
    id: '',
    provider: ''
  }
}
