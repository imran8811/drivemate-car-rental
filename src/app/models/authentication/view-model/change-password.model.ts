export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export class ChangePassword implements IChangePassword {
  oldPassword = '';
  newPassword = '';
  confirmPassword = '';
}

export interface IForgotPassword {
  userID: string;
  email: string;
  verificationLink: string;
}

export class ForgotPassword implements IForgotPassword {
  userID = '';
  email = '';
  verificationLink = '';
}
