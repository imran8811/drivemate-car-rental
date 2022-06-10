export interface ISignupGuestUser {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  lineId: string;
}

export class SignupGuestUser implements ISignupGuestUser {
  firstName = '';
  lastName = '';
  phoneNumber = '';
  email = '';
  lineId = '';
}
