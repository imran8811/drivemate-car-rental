import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { ICity, ISearchResponse, IBasicSearch, BasicSearch, IBookingDataModel, SearchResponse } from '../../models';
import { PAGE_SIZE, PAGE_NO, ALL_LOCATIONS } from '../../constants';
import { Configurations, RentalCategories } from '../../enums';

import { Routes } from '../routes';
import { UtilitiesService } from '../../services/utilities/utilities.service';

@Injectable({ providedIn: 'root' })
export class AssetSearchService {
  basicSearch: IBasicSearch = new BasicSearch();
  backupCars: ISearchResponse = new SearchResponse();
  cities: ICity[] = [];
  airportCities: ICity[] = [];

  constructor(
    private httpClient: HttpClient,
    private utilityService: UtilitiesService
  ) { }

  resetSearchCriteria = () => {
    const promise = new Promise<IBasicSearch>((resolve) => {
      const criteria = new BasicSearch();
      criteria.rentCategoryCode = this.basicSearch.rentCategoryCode;
      criteria.location = this.basicSearch.location;
      criteria.cityLat = this.basicSearch.cityLat;
      criteria.cityLng = this.basicSearch.cityLng;
      criteria.startDate = this.basicSearch.startDate;
      criteria.endDate = this.basicSearch.endDate;

      criteria.dropOffAddress = this.basicSearch.dropOffAddress;
      criteria.dropOffLocationLat = this.basicSearch.dropOffLocationLat;
      criteria.dropOffLocationLng = this.basicSearch.dropOffLocationLng;

      criteria.returnPickupAddress = this.basicSearch.returnPickupAddress;
      criteria.returnPickupLocationLat = this.basicSearch.returnPickupLocationLat;
      criteria.returnPickupLocationLng = this.basicSearch.returnPickupLocationLng;

      criteria.returnDropOffAddress = this.basicSearch.returnDropOffAddress;
      criteria.returnDropOffLocationLat = this.basicSearch.returnDropOffLocationLat;
      criteria.returnDropOffLocationLng = this.basicSearch.returnDropOffLocationLng;

      criteria.roundTripSecondStartDate = this.basicSearch.roundTripSecondStartDate;
      criteria.islocationSwitch = this.basicSearch.islocationSwitch;
      criteria.isTransferBackToAirport = this.basicSearch.isTransferBackToAirport;
      localStorage.removeItem(Configurations.SEARCH_CRITERIA);
      this.basicSearch = criteria;
      resolve(this.basicSearch);
    });
    return promise;
  }

  getSearchedAssets = (pageSize: string = PAGE_SIZE, pageNo: string = PAGE_NO) => {

    this.basicSearch = JSON.parse(localStorage.getItem(Configurations.SEARCH_CRITERIA));
    const searchParams = {
      RentalCategory: (this.basicSearch.rentCategoryCode) ? this.basicSearch.rentCategoryCode : undefined,
      cityLat: this.basicSearch.cityLat ? this.basicSearch.cityLat : undefined,
      cityLng: this.basicSearch.cityLng ? this.basicSearch.cityLng : undefined,
      location: this.basicSearch.location !== ALL_LOCATIONS ? this.basicSearch.location : undefined,
      start: this.basicSearch.startDate ? this.basicSearch.startDate : undefined,
      end: this.basicSearch.endDate ? this.basicSearch.endDate : undefined,

      payment: this.basicSearch.payment ? this.basicSearch.payment : undefined,
      brandModel: this.basicSearch.brandModel ? this.basicSearch.brandModel : undefined,
      sortType: this.basicSearch.sortType ? this.basicSearch.sortType : undefined,
      priceMin: this.basicSearch.priceMin ? this.basicSearch.priceMin : 0,
      priceMax: this.basicSearch.priceMax ? this.basicSearch.priceMax : undefined,
      types: this.basicSearch.types ? this.basicSearch.types : undefined,
      make: this.basicSearch.make ? this.basicSearch.make : undefined,
      model: this.basicSearch.model ? this.basicSearch.model : undefined,
      yearMin: this.basicSearch.yearMin ? this.basicSearch.yearMin : undefined,
      yearMax: this.basicSearch.yearMax ? this.basicSearch.yearMax : undefined,
      features: this.basicSearch.features ? this.basicSearch.features : undefined,
      colors: this.basicSearch.colors ? this.basicSearch.colors : undefined,
      transmission: this.basicSearch.transmission ? this.basicSearch.transmission : undefined,

      pageNo,
      pageSize,
    };

    return this.httpClient.post(Routes.SEARCH_ASSETS, searchParams)
      .pipe(
        tap((response: any) => {
          response.assets.forEach(asset => { asset.defaultImage = this.utilityService.getDefaultImage(asset.pictures); });
        })
      ).toPromise();
  }

  getSearchedRecommendedCars = () => {
    this.basicSearch = JSON.parse(localStorage.getItem(Configurations.SEARCH_CRITERIA));
    const searchParams = {
      rentalCategoryCode: (this.basicSearch.rentCategoryCode) ? this.basicSearch.rentCategoryCode : undefined,
      cityLat: this.basicSearch.cityLat ? this.basicSearch.cityLat : undefined,
      cityLng: this.basicSearch.cityLng ? this.basicSearch.cityLng : undefined,
      location: this.basicSearch.location !== ALL_LOCATIONS ? this.basicSearch.location : undefined,
      start: (this.basicSearch.rentCategoryCode && this.basicSearch.rentCategoryCode !== RentalCategories.AIRPORTTRANSFER) ? this.basicSearch.startDate : undefined,
      end: (this.basicSearch.rentCategoryCode && this.basicSearch.rentCategoryCode !== RentalCategories.AIRPORTTRANSFER) ? this.basicSearch.endDate : undefined,
    };

    return this.httpClient.post(Routes.SEARCH_RECOMMENDED_ASSETS, searchParams)
      .pipe(
        tap((response: any) => {
          response.assets.forEach(asset => { asset.defaultImage = this.utilityService.getDefaultImage(asset.pictures); });
        })
      ).toPromise();
  }

  getSearchedBackupAssets = (assetId: string, pageSize: string = PAGE_SIZE, pageNo: string = PAGE_NO) => {
    this.basicSearch = JSON.parse(localStorage.getItem(Configurations.SEARCH_CRITERIA));
    const searchParams = {
      assetId: (assetId) ? assetId : undefined,
      cityLat: this.basicSearch.cityLat ? this.basicSearch.cityLat : undefined,
      cityLng: this.basicSearch.cityLng ? this.basicSearch.cityLng : undefined,
      start: this.basicSearch.startDate,
      end: this.basicSearch.endDate,
      searchRadiusKM: '50',
      pageNo,
      pageSize,
    };

    return this.httpClient.post(Routes.SEARCH_BACKUP_ASSETS, searchParams)
      .pipe(
        tap((response: any) => {
          response.assets.forEach(asset => { asset.defaultImage = this.utilityService.getDefaultImage(asset.pictures); });
        })
      ).toPromise();
  }

  getSearchedSwitchAssets = (booking: IBookingDataModel, pageSize: string = PAGE_SIZE, pageNo: string = PAGE_NO) => {
    const searchParams = {
      RentalCategory: booking.rent.rentalCategoryCode,
      start: booking.startDate,
      end: booking.endDate,
      assetsByOwnerId: (booking._assetOwnerId) ? booking._assetOwnerId : undefined,
      switchedAssetId: (booking._assetId) ? booking._assetId : undefined,
      pageNo,
      pageSize,
    };

    return this.httpClient.post(Routes.SEARCH_ASSETS, searchParams)
      .pipe(
        tap((response: any) => {
          response.assets.forEach(asset => { asset.defaultImage = this.utilityService.getDefaultImage(asset.pictures); });
        })
      ).toPromise();
  }

  getPlacesGroupedByCities = (language: string) => {
    const promise = new Promise(async (resolve, reject) => {
      const lang = language ? `&language=${language}` : '';
        this.cities = await this.httpClient.get(`${Routes.GET_PLACES_GROUPED_BY_CITIES}?published=true${lang}`).toPromise() as ICity[];
       resolve(this.cities);
    });
    return promise;
  }
}
