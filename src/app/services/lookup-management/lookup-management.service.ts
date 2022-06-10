import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LookupType } from '../../enums';

import { IConfigurationType } from '../../models';
import { Routes } from '../routes';

@Injectable({providedIn: 'root'})
export class LookupManagementService {

  constructor(private httpClient: HttpClient) {}

  getLookups = (lookupType: LookupType, configurationCode: string): Promise<IConfigurationType[]> => {
    switch (lookupType) {
      case LookupType.ASSET_MANAGEMENT:
        return this.getConfigurations(Routes.GET_ASSET_REFERENCE_DATA, configurationCode);
      case LookupType.PLATFORM_MANAGEMENT:
        return this.getConfigurations(Routes.GET_REFERENCE_DATA_LOOKUPS, configurationCode);
      case LookupType.BOOKING_MANAGEMENT:
        return this.getConfigurations(Routes.GET_BOOKING_REFERENCE_DATA, configurationCode);
      case LookupType.LANGUAGE:
        return this.getConfigurations(Routes.GET_LANGUAGES, configurationCode);
    }
  }

  private getConfigurations = (route: string, configurationCode: string): Promise<IConfigurationType[]> => {
    return this.httpClient.get(`${route}?types=${configurationCode}`).toPromise() as Promise<IConfigurationType[]>;
  }
}
