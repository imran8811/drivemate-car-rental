import { IPhoneVerificationResponse, PhoneVerificationResponse } from './phone-verification.models';
import { IEmailVerify, EmailVerify } from './email-verification';

export interface IMemberVerification {
    phoneNumberVerify: IPhoneVerificationResponse;
    emailVerify: IEmailVerify;
}

export class MemberVerification implements IMemberVerification {
    phoneNumberVerify = new PhoneVerificationResponse();
    emailVerify = new EmailVerify();
}
