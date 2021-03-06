import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Enums } from '@otoz/constants';

import { LandingPagesService, AssetSearchService } from '../../../../services';
import {
  ILandingPage, IPagination, ILandingPageList, IConfigurationTypeValue, IConfigurationType,
  ITopReviews, ISearchResponse, IAsset
} from '../../../../models';
import { Configurations, LanguageType } from '../../../../enums';
import { REGEX, LANDING_PAGE_TYPES, NAVIGATION, STATIC_BASE_URL } from '../../../../constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  defaultLang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') ? localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') : LanguageType.THAI;
  readonly NAVIGATION = NAVIGATION;
  LANDING_PAGE_TYPES = LANDING_PAGE_TYPES;
  readonly REGEX = REGEX;
  readonly STATIC_BASE_URL = STATIC_BASE_URL;
  currentPage = this.route.snapshot.paramMap.get('pageType').toLowerCase();
  pageType = '';
  topReviews: ITopReviews[];
  makeNames: IConfigurationTypeValue[];
  makeModels: IPagination<any>;
  carTypes: IConfigurationTypeValue[];
  rentalCategory = Enums.RentalCategory.Car;
  slugRentalCategory = 'car-rental';
  makeId = '';
  carType = '';
  assetsSearch: IAsset[];
  today: Date = new Date();
  startDateNonIso = this.today.setDate(this.today.getDate() + 1);
  startDate = new Date(this.startDateNonIso).toISOString();
  tomorrow = this.today.setDate(this.today.getDate() + 1);
  endDate = new Date(this.tomorrow).toISOString();
  cityLat = 13.7563;
  cityLng = 100.5018;
  moreReviews = false;
  moreAssets = false;
  noReviewFound = false;
  noAssetFound = false;
  pageMetaInfo: ILandingPage[];
  NoPageFound = false;
  currentLang: string = LanguageType.ENGLISH;
  basicSearch = this.searchCarService.basicSearch;
  currentModel = '';
  activePage = '';

  topLocations = [
    {
      name: 'bangkok',
      thai: '???????????????????????????????????????',
      chinese: '??????',
      cityLat: 13.7563,
      cityLng: 100.5018
    },
    {
      name: 'pattaya',
      thai: '???????????????',
      chinese: '?????????',
      cityLat: 12.9236,
      cityLng: 100.8825
    },
    {
      name: 'chiangmai',
      thai: '???????????????????????????',
      chinese: '??????',
      cityLat: 18.7953,
      cityLng: 98.9620
    },
    {
      name: 'phuket',
      thai: '??????????????????',
      chinese: '?????????',
      cityLat: 7.8804,
      cityLng: 98.3923
    },
    {
      name: 'krabi',
      thai: '??????????????????',
      chinese: '??????',
      cityLat: 8.0855,
      cityLng: 98.9063
    },
    {
      name: 'nonthaburi',
      thai: '?????????????????????',
      chinese: '?????????',
      cityLat: 13.8591,
      cityLng: 100.5217
    },
    {
      name: 'phitsanulok',
      thai: '????????????????????????',
      chinese: '?????????',
      cityLat: 16.8211,
      cityLng: 100.2659
    },
    {
      name: 'samutprakarn',
      thai: '?????????????????????????????????',
      chinese: '??????Pra',
      cityLat: 13.5991,
      cityLng: 100.5998
    },
    {
      name: 'huahin',
      thai: '??????????????????',
      chinese: '??????',
      cityLat: 12.5684,
      cityLng: 99.9577
    },
    {
      name: 'nakhon-si-thammarat',
      thai: '???????????????????????????????????????',
      chinese: '???????????????',
      cityLat: 8.4304,
      cityLng: 99.9631
    },
    {
      name: 'surat-thani',
      thai: '????????????????????????????????????',
      chinese: '????????????',
      cityLat: 9.1342,
      cityLng: 99.3334
    },
    {
      name: 'chumphon',
      thai: '???????????????',
      chinese: '??????',
      cityLat: 10.4930,
      cityLng: 99.1800
    },
    {
      name: 'ranong',
      thai: '???????????????',
      chinese: '??????',
      cityLat: 9.9529,
      cityLng: 98.6085
    },
    {
      name: 'kohsamui',
      thai: '????????????????????????',
      chinese: '?????????',
      cityLat: 9.5120,
      cityLng: 100.0136
    },
    {
      name: 'hatyai',
      thai: '?????????????????????',
      chinese: '??????',
      cityLat: 7.0086,
      cityLng: 100.4747
    },
    {
      name: 'chiangrai',
      thai: '????????????????????????',
      chinese: '??????',
      cityLat: 19.9105,
      cityLng: 99.8406
    },
    {
      name: 'nan',
      thai: '????????????',
      chinese: '???',
      cityLat: 18.7839,
      cityLng: 100.7790
    },
    {
      name: 'lampang',
      thai: '???????????????',
      chinese: '??????',
      cityLat: 18.2855,
      cityLng: 99.5128
    },
    {
      name: 'khonkean',
      thai: '?????????????????????',
      chinese: '??????',
      cityLat: 16.4322,
      cityLng: 102.8236
    },
    {
      name: 'ubon-ratchathani',
      thai: '?????????????????????????????????',
      chinese: '??????????????????',
      cityLat: 15.2448,
      cityLng: 104.8473
    },
    {
      name: 'udonthani',
      thai: '????????????????????????',
      chinese: '????????????',
      cityLat: 17.3647,
      cityLng: 102.8159
    },
    {
      name: 'sakonakhon',
      thai: '??????????????????',
      chinese: '????????????',
      cityLat: 17.1664,
      cityLng: 104.1486
    },
    {
      name: 'now',
      thai: '??????????????????',
      chinese: '??????',
      cityLat: 13.8591,
      cityLng: 100.5217
    },
    {
      name: 'loei',
      thai: '?????????',
      chinese: '???',
      cityLat: 17.4860,
      cityLng: 101.7223
    },
    {
      name: 'chonburi',
      thai: '??????????????????',
      chinese: '?????????',
      cityLat: 13.3611,
      cityLng: 100.9847
    },
    {
      name: 'buriram',
      thai: '???????????????????????????',
      chinese: '?????????',
      cityLat: 14.9951,
      cityLng: 103.1116
    },
    {
      name: 'suvarnabhumi-airport',
      thai: '???????????????????????????????????????????????????',
      chinese: '??????????????????',
      cityLat: 13.6900,
      cityLng: 100.7501
    },
    {
      name: 'chiangmai-airport',
      thai: '????????????????????????????????????????????????????????????????????????',
      chinese: '??????????????????',
      cityLat: 18.7677,
      cityLng: 98.9640
    },
    {
      name: 'phuket-airport',
      thai: '???????????????????????????????????????????????????????????????',
      chinese: '??????????????????',
      cityLat: 8.1111,
      cityLng: 98.3065
    },
    {
      name: 'donmueang-airport',
      thai: '?????????????????????????????????????????????',
      chinese: '??????????????????',
      cityLat: 13.9133,
      cityLng: 100.6042
    }
  ];

  getLocation = this.topLocations.filter(loc => loc.name === this.currentPage);

  searchLocation = this.getLocation != undefined? this.currentPage : 'Bangkok';

  constructor(
    private route: ActivatedRoute,
    private landingpagesservice: LandingPagesService,
    private location: Location,
    private title: Title,
    private meta: Meta,
    private router: Router,
    private translate: TranslateService,
    private searchCarService: AssetSearchService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    const currentURL = this.location.path().split('/');
    const langType = (el) => (el === LanguageType.ENGLISH) || (el === LanguageType.THAI) || (el === 'zh-cn');
    const langFound = currentURL.find(langType);
    switch (langFound) {
      case LanguageType.ENGLISH:
        this.currentLang = LanguageType.ENGLISH;
        break;
      case LanguageType.THAI:
        this.currentLang = LanguageType.THAI;
        break;
      case LanguageType.CHINESE_FULL:
        this.currentLang = LanguageType.CHINESE_FULL;
        break;
      default:
        this.currentLang = this.translate.getDefaultLang();
    }
    this.loadData();
    this.formatPageType();
  }

  loadData = async () => {
    var response = await this.landingpagesservice.getLandingPageByRentalCategory(this.rentalCategory, `${this.currentLang}/${this.slugRentalCategory}/${this.currentPage}`) as ILandingPageList;
    if (response.pageData.length > 0) {
      this.pageMetaInfo = response.pageData;
      this.title.setTitle(this.pageMetaInfo[0].metaTitle);
      this.meta.updateTag({ name: 'keywords', content: this.pageMetaInfo[0].metaKeyword });
      this.meta.updateTag({ name: 'description', content: this.pageMetaInfo[0].metaDesc });
      this.makeNames = await this.landingpagesservice.getMakes() as IConfigurationTypeValue[];
      this.makeModels = await this.landingpagesservice.getModels() as IPagination<any>;
      const assetMakeName =this.makeNames.filter(makeNames => makeNames.name.toLowerCase() === this.currentPage);
      const getLatLong = this.topLocations.filter(loc => loc.name === this.currentPage);
      this.topReviews = await this.landingpagesservice.getTopReviewsLocation(this.rentalCategory, getLatLong.length? getLatLong[0].cityLat:0, getLatLong.length?getLatLong[0].cityLng:0, assetMakeName.length? assetMakeName[0].name.toLowerCase(): '', (assetMakeName.length || getLatLong.length)? '' : this.currentPage, this.currentModel) as ITopReviews[];

      if (this.topReviews.length > 6) {
        this.moreReviews = true;
      } else if (this.topReviews.length === 0) {
        this.noReviewFound = true;
      }

      const schema = {
        "@context": "http://schema.org/",
        "@type": "Service",
        "name": "??????????????????????????????????????????",
        "url" : "https://www.drivemate.asia/car-rental/chiangrai",
        "description": "Drivemate ???????????????????????????????????????????????????????????? ??????????????????????????????????????? ?????????????????????????????? ?????????????????????????????????????????????????????????????????????????????? 100 ???????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????" ,
          "serviceType": "Car Rental Service",
          "provider": {
        "@type" : "Organization",
          "name" : "Drivemate",
          "image" : "https://www.drivemate.asia/static/images/web/front-office/favicon/android-icon-192x192.png",
          "description" : "Drivemate ???????????????????????????????????? ?????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????? ????????????????????? ?????????????????????",
          "address" : {
            "@type" : "PostalAddress",
            "addressCountry" : "TH",
            "addressLocality" : "Bangkok",
            "postalCode" : "10250",
            "streetAddress" : "1168 Rama 9 Rd. Suanluang"
          },
          "contactPoint" : [{
            "@type" : "ContactPoint",
            "telephone" : "+66 61 995 5656",
            "contactType" : "customer service"
          }],
          "url" : "https://www.drivemate.asia/",
          "email": "contact@drivemate.asia",
          "telephone" : "+66 61 995 5656",
          "logo" : "https://www.drivemate.asia/static/images/web/front-office/favicon/android-icon-192x192.png",
          "sameAs" : [
            "https://www.facebook.com/drivemateasia",
            "https://twitter.com/drivemate_th",
            "https://www.instagram.com/drivemate.asia/",
            "https://www.drivemate.asia/blog/"
          ]
        }
      }
      schema['name'] = this.pageMetaInfo[0].schemaName;
      schema['url'] = this.pageMetaInfo[0].schemaUrl;
      schema['description'] = this.pageMetaInfo[0].schemaDesc;
      switch(this.pageMetaInfo[0].schemaServiceType){
        case 'carRentalService' :
          schema['serviceType'] = 'Car Rental Service';
          break;
        case 'carWithDriverService' :
          schema['serviceType'] = "Car with Driver Service";
          break;
        case 'airportTransferService' :
          schema['serviceType'] = "Airport Transfer Service";
          break;
        default :
          schema['serviceType'] = 'Car Rental Service';
          break;
      }
      const scriptCreated = this.document.createElement('script');
      scriptCreated.type = 'application/ld+json';
      scriptCreated.innerHTML = JSON.stringify(schema);
      this.document.getElementsByTagName('body')[0].appendChild(scriptCreated);

      const carTypes = await this.landingpagesservice.getCarTypes() as IConfigurationType[];
      this.carTypes = carTypes[0].lookups;
      if (this.currentPage === 'benz') {
        this.currentPage = 'mercedes benz';
      }
      if (this.currentPage === 'suv') {
        this.currentPage = 'suvs';
      }
      if (this.currentPage === 'luxury-car') {
        this.currentPage = 'convertible';
      }
      if (this.currentPage === 'ecocar') {
        this.currentPage = 'eco sedan';
      }
      if (this.currentPage) {
        const brandArray = [];
        this.makeNames.map(el => {brandArray.push(el.name.toLowerCase())});
        const brandFound = brandArray.includes(this.currentPage);
        if (brandFound) {
          this.pageType = LANDING_PAGE_TYPES.BRAND;
        } else {
          const carTypesArray = [];
          this.carTypes.map(el => { carTypesArray.push(el.name.toLowerCase()); });
          const carTypeFound = carTypesArray.includes(this.currentPage);
          if (carTypeFound) {
            this.pageType = LANDING_PAGE_TYPES.MODEL;
          } else {
            this.pageType = LANDING_PAGE_TYPES.PROVINCE;
          }
        }
      }
      if (this.pageType === LANDING_PAGE_TYPES.PROVINCE && this.currentLang === LanguageType.THAI) {
        const getLatLong = this.topLocations.filter(loc => loc.name === this.currentPage);
        this.activePage = getLatLong[0].thai;
        this.searchLocation = getLatLong[0].name;
      }
      if(this.pageType === LANDING_PAGE_TYPES.BRAND || this.pageType === LANDING_PAGE_TYPES.MODEL){
        this.searchLocation = 'Bangkok';
        this.activePage = this.currentPage;
      }
      if(this.pageType === LANDING_PAGE_TYPES.BRAND && this.currentModel != null) {
        var filterModelObj = this.makeModels.pageData.filter(el => el.makeName.toLowerCase() === this.currentPage);
        if(filterModelObj.length === 0){
          var filterModelObj = this.makeModels.pageData.filter(el => el.makeName.toLowerCase().replace(/-/g, ' ') === this.currentPage);
          if(filterModelObj.length === 0) {
            this.currentPage.replace(' ', '-');
            var filterModelObj = this.makeModels.pageData.filter(el => el.makeName.toLowerCase().replace(/\s/g, '-') === this.currentPage);
          }
        }
        if(filterModelObj[0].makeName.toLowerCase()=== this.currentPage) {
          this.currentPage = filterModelObj[0].makeName;
        }
      }
      this.searchAsset();
    } else {
      this.NoPageFound = true;
    }
  }

  formatPageType = () => {
    switch(this.currentPage){
      case 'chiangmai':
        this.activePage = 'Chiang Mai'
        break;
      case 'chiangrai':
        this.activePage = 'Chiang Rai'
        break;
      default:
        this.activePage = this.currentPage
    }
  }


  searchAsset = async () => {
    if (this.pageType === LANDING_PAGE_TYPES.BRAND) {
      const filterObj = this.makeNames.filter(make => make.name.replace('-', ' ').toLowerCase() === this.currentPage.toLowerCase());
      this.makeId = filterObj[0]._id;
      this.basicSearch.make = this.makeId;
      this.basicSearch.cityLat = this.cityLat;
      this.basicSearch.cityLng = this.cityLng;
      this.basicSearch.location = this.searchLocation;
      this.basicSearch.rentCategoryCode = Enums.RentalCategory.Car;
      localStorage.setItem(Configurations.SEARCH_CRITERIA, JSON.stringify(this.basicSearch));
    } else if (this.pageType === LANDING_PAGE_TYPES.MODEL) {
      const filterObj = this.carTypes.filter(type => type.name.replace('-', ' ').toLowerCase() === this.currentPage);
      this.carType = filterObj[0].code;
      this.basicSearch.types = this.carType;
      this.basicSearch.cityLat = this.cityLat;
      this.basicSearch.cityLng = this.cityLng;
      this.basicSearch.location = this.searchLocation;
      this.basicSearch.rentCategoryCode = Enums.RentalCategory.Car;
      localStorage.setItem(Configurations.SEARCH_CRITERIA, JSON.stringify(this.basicSearch));
    } else if (this.pageType === LANDING_PAGE_TYPES.PROVINCE) {
      const getLatLong = this.topLocations.filter(loc => loc.name === this.currentPage);
      this.cityLat = getLatLong[0].cityLat;
      this.cityLng = getLatLong[0].cityLng;
      this.basicSearch.cityLat = getLatLong[0].cityLat;
      this.basicSearch.cityLng = getLatLong[0].cityLng;
      this.basicSearch.location = this.currentPage;
      this.basicSearch.rentCategoryCode = Enums.RentalCategory.Car;
      this.basicSearch.brandModel = this.currentModel;
      localStorage.setItem(Configurations.SEARCH_CRITERIA, JSON.stringify(this.basicSearch));
    }
    const data = {
      RentalCategory: this.rentalCategory,
      cityLat: this.cityLat,
      cityLng: this.cityLng,
      start: this.startDate,
      end: this.endDate,
      priceMin: 0,
      pageNo: '1',
      pageSize: '6',
      make: this.makeId,
      types: this.carType,
      brandModel: this.currentModel
    };
    const response = await this.landingpagesservice.searchAssets(data) as ISearchResponse;
    this.assetsSearch = response.assets;
    if (response.total > 6) {
      this.moreAssets = true;
    } else if (this.assetsSearch.length === 0) {
      this.noAssetFound = true;
    }
  }

  loadMoreAssets = async () => {
    this.defaultLang === 'th'? window.location.href=`${STATIC_BASE_URL}${NAVIGATION.AVAILABLE_ASSETS}` : window.location.href=`${STATIC_BASE_URL}/en${NAVIGATION.AVAILABLE_ASSETS}`;
  }

  loadMoreReviews = async () => {
    const response = await this.landingpagesservice.getMoreReviews(this.rentalCategory) as ITopReviews[];
    response.forEach(res => {
      this.topReviews.push(res);
    });
    this.moreReviews = false;
  }
}
