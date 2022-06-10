export interface IPhoneVerificationResponse {
    pinTimerInSeconds: number;
    resendTimerInSeconds: number;
    incorrectPinAttemptsLeft: number;
    resendPinAttemptsLeft: number;
    phoneNumberVerificationStatus: string;
}

export class PhoneVerificationResponse implements IPhoneVerificationResponse {
    pinTimerInSeconds = 0;
    resendTimerInSeconds = 0;
    incorrectPinAttemptsLeft = 0;
    resendPinAttemptsLeft = 0;
    phoneNumberVerificationStatus = '';
}