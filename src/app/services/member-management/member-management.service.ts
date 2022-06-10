import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Configurations } from '../../enums';
import { IUserDto, IUser, User, ISigninDataModel, IEmailVerification, IPhoneVerificationResponse, IMemberVerification, IBookingDuration, IConfigurations } from '../../models';
import { Routes } from '../routes';

@Injectable({ providedIn: 'root' })
export class MemberManagementService {
  user$: BehaviorSubject<IUser> = new BehaviorSubject(new User());

  constructor(
    private httpClient: HttpClient
  ) { }

  getMemberDetailsById = (userId: string, isLoggedInUser: boolean = false): Promise<IUser> => {
    return this.httpClient.get(`${Routes.GET_USER_INFORMATION}${userId}`).pipe(
      tap((response: any) => { if (isLoggedInUser) { this.user$.next(response); } }),
    ).toPromise() as Promise<IUser>;
  }

  getMemberDetails = (): Promise<ISigninDataModel> => {
    const promise = new Promise<ISigninDataModel>((resolve, reject) => {
      resolve(JSON.parse(localStorage.getItem(Configurations.ACCESS_TOKEN)) as ISigninDataModel);
    });
    return promise;
  }

  getMemberDetailByMemberIds = (memberIds: string[]): Promise<IUser[]> => {
    return this.httpClient.post(`${Routes.GET_MEMBER_DETAIL_BY_IDS}`, { memberIds }).toPromise() as Promise<IUser[]>;
  }

  updateDocuments = (userId: string, data: any) => {
    return this.httpClient.put(`${Routes.UPDATE_MEMBER_DOCUMENTS}/${userId}`, data).pipe(
      tap((response) => { this.getMemberDetailsById(userId); }),
    ).toPromise();
  }

  signOut = () => {
    localStorage.removeItem(Configurations.ACCESS_TOKEN);
    this.user$.next(new User());
  }

  editProfile = (user: IUserDto): Promise<IUser> => {
    return this.httpClient.patch(`${Routes.UPDATE_USER_PROFILE}`, user).toPromise() as Promise<IUser>;
  }

  editCorporateUserProfile = (user: IUserDto): Promise<IUser> => {
    return this.httpClient.put(`${Routes.UPDATE_CORPORATE_USER_PROFILE}`, user).toPromise() as Promise<IUser>;
  }

  resendConfirmationEmail = async (userId: string): Promise<IEmailVerification> => {
    return this.httpClient.put(Routes.RESEND_VERIFICATION_EMAIL, { userID: userId }).toPromise() as Promise<IEmailVerification>;
  }

  verifyEmail = async (userId: string, tokenId: string): Promise<IEmailVerification> => {
    return this.httpClient.get(`${Routes.VERIFY_EMAIL}/${userId}/${tokenId}`).toPromise() as Promise<IEmailVerification>;
  }

  putResendPhonePin = (userId: string): Promise<IPhoneVerificationResponse> => {
    return this.httpClient.put(`${Routes.RESEND_PHONE_PIN}`, { userID: userId }).toPromise() as Promise<IPhoneVerificationResponse>;
  }

  postVerifyPhone = (userId: string, pinCode: number): Promise<IPhoneVerificationResponse> => {
    return this.httpClient.post(`${Routes.VERIFY_PIN_CODE}`, { userID: userId, pinCode: +pinCode }).toPromise() as Promise<IPhoneVerificationResponse>;
  }

  putPhoneNumber = (phoneNo: string): Promise<IPhoneVerificationResponse> => {
    return this.httpClient.put(Routes.UPDATE_PHONE_NUMBER, { phoneNumber: phoneNo }).toPromise() as Promise<IPhoneVerificationResponse>;
  }

  getMemberVerificationStatus = (): Promise<IMemberVerification> => {
    return this.httpClient.get(Routes.MEMBER_VERIFICATION_STATUS).toPromise() as Promise<IMemberVerification>;
  }

  updateUserDefaultLanguage = (code: string, displayName: string) => {
    return this.httpClient.put(Routes.UPDATE_DEFAULT_LANGUAGE, { code, displayName }).toPromise();
  }

  LoadConfigurations = async (key:string): Promise<IConfigurations> => {
    return await this.httpClient.get(`${Routes.GET_TENANT_CONFIGURATIONS}/${'drivemate'}/${key}`).toPromise() as Promise<IConfigurations>;    
  }
}
