import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  ISearchResponse,
  IPagination,
  ITopDestinations,
  ITopBrands,
  ITopMakes,
  ITopReviews,
  ILandingPageList,
  IConfigurationTypeValue,
  IConfigurationType
} from '../../models';
import { LookupType } from '../../enums';

import { Routes } from '../routes';

@Injectable({ providedIn: 'root' })

export class LandingPagesService {

  constructor(private httpClient: HttpClient) { }

  getTopDestinations = (rentalCategory): Promise<ITopDestinations> => {
    const response = this.httpClient.get(`${Routes.GET_TOP_DESTINATIONS_BY_RENTAL_CATEGORY}?rentalCategoryCode=${rentalCategory}&limit=5`).toPromise() as Promise<ITopDestinations>;
    return response;
  }

  getTopBrands = (rentalCategory): Promise<ITopBrands> => {
    const response = this.httpClient.get(`${Routes.GET_TOP_BRANDS_BY_RENTAL_CATEGORY}?rentalCategoryCode=${rentalCategory}&limit=5`).toPromise() as Promise<ITopBrands>;
    return response;
  }

  getTopMakes = (rentalCategory): Promise<ITopMakes> => {
    const response = this.httpClient.get(`${Routes.GET_TOP_MAKES_BY_RENTAL_CATEGORY}?rentalCategoryCode=${rentalCategory}&limit=5`).toPromise() as Promise<ITopMakes>;
    return response;
  }

  getTopReviews = (rentalCategory = ''): Promise<ITopReviews[]> => {
    let param = rentalCategory ? `rentalCategoryCode=${rentalCategory}` : '';
    param = param ? param + `&limit=6` : `limit=12`;
    const response = this.httpClient.get(`${Routes.GET_TOP_REVIEWS_BY_RENTAL_CATEGORY}?${param}`).toPromise() as Promise<ITopReviews[]>;
    return response;
  }
  getTopReviewsLocation = (rentalCategory = '', lat = 0,lng = 0, assetMakeName, assetTypeCode, assetModelName): Promise<ITopReviews[]> => {
    let param = rentalCategory ? `rentalCategoryCode=${rentalCategory}` : '';
    param = param ? param + `&limit=6` : `limit=12`;
    param = lat ? param + `&lat=${lat}` : param;
    param = lat ? param + `&long=${lng}` : param;
    param = assetTypeCode ? param + `&assetTypeCode=${assetTypeCode}` : param;
    param = assetMakeName ? param + `&assetMakeName=${assetMakeName}` : param;
    param = assetModelName ? param + `&assetModelName=${assetModelName}` : param;
    const response = this.httpClient.get(`${Routes.GET_TOP_REVIEWS_BY_RENTAL_CATEGORY}?${param}`).toPromise() as Promise<ITopReviews[]>;

    return response;
  }
  getMoreReviews = (rentalCategory): Promise<ITopReviews[]> => {
    const response = this.httpClient.get(`${Routes.GET_TOP_REVIEWS_BY_RENTAL_CATEGORY}?rentalCategoryCode=${rentalCategory}&limit=6&pageNo=2`).toPromise() as Promise<ITopReviews[]>;
    return response;
  }

  getLandingPageByRentalCategory = (rentalCategory, slug): Promise<ILandingPageList> => {
    const response = this.httpClient.get(`${Routes.GET_LANDING_PAGE_BY_RENTAL_CATEGORY}?rentalCategoryCode=${rentalCategory}&slug=${slug}`).toPromise() as Promise<ILandingPageList>;
    return response;
  }

  getMakes = async (): Promise<IConfigurationTypeValue[]> => {
    const response = await this.httpClient.get(Routes.GET_MAKES).toPromise() as IConfigurationTypeValue[];
    return response;
  }

  getModels = async(): Promise<IPagination<any>> => {
    const response = await this.httpClient.get(Routes.GET_MODELS).toPromise() as IPagination<any>;
    return response;
  }

  getCarTypes = async(): Promise<IConfigurationType[]> => {
    const response = await this.httpClient.get(`${Routes.GET_ASSET_REFERENCE_DATA}?types=CarType`).toPromise() as IConfigurationType[];
    return response;
  }

  getImportantPlaces = async (): Promise<IConfigurationTypeValue> => {
    const response = await this.httpClient.get(Routes.GET_IMPORTANTPLACES).toPromise() as IConfigurationTypeValue;
    return response;
  }

  searchAssets = async (data): Promise<ISearchResponse> => {
    const response = await this.httpClient.post(Routes.SEARCH_ASSETS, data).toPromise() as ISearchResponse;
    return response;
  }

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
