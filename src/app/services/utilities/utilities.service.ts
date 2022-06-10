import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { timeout } from 'rxjs/operators';

import { ConfigurationTypes, Configurations } from '../../enums';
import { TIME_OUT, DEFAULT_PROFILE_IMAGE, DEFAULT_CAR_IMAGE } from '../../constants';
import { IConfigurationType, IPicture, Picture, IConfigurationTypeValue } from '../../models';
// import { TenantManagementService } from '../configuration-management/tenant-management.service';
// import { Routes } from '../routes';

@Injectable({ providedIn: 'root' })
export class UtilitiesService {
  // tslint:disable-next-line: variable-name
  private _isLoggedIn = false;

  constructor(
    // private http: HttpClient,
    // private tenantManagementService: TenantManagementService
  ) { }

  get isLoggedIn(): boolean {
    if (Configurations.ACCESS_TOKEN in localStorage) {
      this._isLoggedIn = true;
    } else {
      this._isLoggedIn = false;
    }
    return this._isLoggedIn;
  }
  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  getProfileImage = (imageName: string): string => {
    if (!imageName) {
      return DEFAULT_PROFILE_IMAGE;
    }
    return imageName;
  }

  getDefaultImage = (pictures: IPicture[]): IPicture => {
    if (pictures.length <= 0) {
      const defaultPicture = new Picture();
      defaultPicture.path = DEFAULT_CAR_IMAGE;
      return defaultPicture;
    }
    return pictures.sort(x => x.order)[0];
  }

  // getUploadUrls = (filenames: string[], namingfields: string[], imageType: string, tenantId = this.tenantManagementService.configuration.tenant_id) => {
  //   return this.http.post(`${Routes.GET_UPLOAD_URLS}/${tenantId}`, { filenames, namingfields, imageType }).pipe(timeout(TIME_OUT)).toPromise();
  // }

  getmonthlyPrice = (value: number) => {
    return (value / 30);
  }

  getDailyPricePercent = (value: number, percent: number): number => {
    return value - (value * percent / 100);
  }

  calculateDays = (year: number, month: string = '1', totalDays: { value: number, text: number }[]) => {
    totalDays = [];
    if (month === '1' || month === '3' || month === '5' || month === '7' || month === '8' || month === '10' || month === '12') {
      Array(31).fill(0).map((e, i) => i + 1).forEach(counter => { totalDays.push({ value: counter, text: counter }); });
    } else {
      if (month === '2') {
        if (year % 4 === 0) {
          Array(29).fill(0).map((e, i) => i + 1).forEach(counter => { totalDays.push({ value: counter, text: counter }); });
        } else {
          Array(28).fill(0).map((e, i) => i + 1).forEach(counter => { totalDays.push({ value: counter, text: counter }); });
        }
      } else {
        Array(30).fill(0).map((e, i) => i + 1).forEach(counter => { totalDays.push({ value: counter, text: counter }); });
      }
    }
  }

  getConfigurationTypeValue = (configurationTypes: IConfigurationType[], configurationType: ConfigurationTypes): IConfigurationTypeValue[] => {
    const data = configurationTypes.find(f => f.typeCode === configurationType);
    return (data && data.lookups) ? data.lookups : [];
  }

  multiSelectDropdownSettings = (
    singleSelection = false,
    idField = 'code',
    textField = 'displayName',
    selectAllText = 'Select All',
    unSelectAllText = 'UnSelect All',
    itemsShowLimit = 1,
    allowSearchFilter = false
  ) => {
    return {
      singleSelection,
      idField,
      textField,
      selectAllText,
      unSelectAllText,
      itemsShowLimit,
      allowSearchFilter
    };
  }

  // getAzureStorageUrlWithTenant = () => {
  //   return `${this.tenantManagementService.configuration.configuration.secrets.azure.azureStorageURI}/${this.tenantManagementService.configuration.tenant_id}`;
  // }

  // getAzureStorageUrlWithOutTenant = () => {
  //   return `${this.tenantManagementService.configuration.configuration.secrets.azure.azureStorageURI}`;
  // }
}
