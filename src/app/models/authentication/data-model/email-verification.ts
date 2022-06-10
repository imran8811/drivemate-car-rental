export interface IEmailVerify {
    emailTokenExpiredInMinutes: number;
    emailVerificationStatus: string;
}

export class EmailVerify implements IEmailVerify {
    emailTokenExpiredInMinutes = 0;
    emailVerificationStatus: string;
}

export interface IEmailVerification {
    email: string;
    userID: string;
    status: string;
    emailVerify: IEmailVerify;
}

export class EmailVerification implements IEmailVerification {
    email = '';
    userID = '';
    status = '';
    emailVerify = new EmailVerify();
}
