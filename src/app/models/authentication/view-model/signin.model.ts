export interface ISignin {
  email: string;
  password: string;
}

export class Signin implements ISignin {
  email = '';
  password = '';
}
