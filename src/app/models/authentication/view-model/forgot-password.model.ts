

export interface IForgotChangePassword {
    userID: string;
    newPassword: string;
    confirmPassword: string;
  }
  
  export class ForgotChangePassword implements IForgotChangePassword {
    userID = '';
    newPassword = '';
    confirmPassword = '';
  }