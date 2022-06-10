export interface IForgotEmailVerification{
    email: string;
    userID: string;
    expiredInMinutes: number;
}

export class ForgotEmailVerification implements IForgotEmailVerification{
    email: string;
    userID: string;
    expiredInMinutes: number;
}
