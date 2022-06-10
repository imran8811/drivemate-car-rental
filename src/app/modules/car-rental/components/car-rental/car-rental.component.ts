import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Location, DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Enums } from '@otoz/constants';

import { ICarouselData, ILandingPage, ILandingPageList, ITopDestinations, ITopBrands, ITopMakes, ITopReviews } from '../../../../models'
import { LandingPagesService } from '../../../../services';
import { LanguageType } from '../../../../enums';
import { NAVIGATION, STATIC_BASE_URL } from '../../../../constants';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.scss']
})

export class CarRentalComponent implements OnInit {
  defaultLang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') ? localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') : LanguageType.THAI;
  pageMetaInfo: ILandingPage[];
  topDestinations: ITopDestinations;
  topBrands: ITopBrands;
  topMakes: ITopMakes;
  topReviews: ITopReviews[];
  reviewsData: ITopReviews;
  currentRentCat: string = '';
  moreReviews: boolean = false;
  NoPageFound: boolean = false;
  currentLang: string = LanguageType.ENGLISH;
  rentalCategory: string = '';
  rentCategoryBreadcrumb: string = '';
  currentPage:string = '';
  readonly NAVIGATION = NAVIGATION;
  azureBlobPath = '';
  STATIC_BASE_URL = STATIC_BASE_URL;

  carouselData: ICarouselData[] = [
    { id: 'bangkok', src: 'assets/images/popular-locations/bangkok_kuV2eLo.jpg.320x200_q85_crop-smart_upscale.jpg', text: 'Bangkok', dataMerge: 1,  dotContent: 'text1'},
    { id: 'pattaya', src: 'assets/images/popular-locations/เชารถราคาถกพทยา.jpg.320x200_q85_crop-smart_upscale.jpg', text: 'Pattaya', dataMerge: 2,  dotContent: 'text2'},
    { id: 'chiangmai', src: 'assets/images/popular-locations/chiangmai_Scene.jpg.320x200_q85_crop-smart_upscale.jpg', text: 'Chiang Mai', dataMerge: 3, dotContent: 'text3'},
    { id: 'phuket', src: 'assets/images/popular-locations/car_rental_Phuket_the_best_one.jpg.320x200_q85_crop-smart_upscale.jpg', text: 'Phuket', dataMerge: 4,  dotContent: 'text4'},
    { id: 'krabi', src: 'assets/images/popular-locations/krabi_Pic_.jpg.320x200_q85_crop-smart_upscale.jpg', text: 'Krabi', dataMerge: 5,  dotContent: 'text5'},
  ];

  customOptions: OwlOptions = {
    loop:false,
    nav:true,
    margin: 15,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  };

  constructor(
    private landingpagesservice: LandingPagesService,
    private title: Title,
    private meta: Meta,
    private translate: TranslateService,
    private location : Location,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    const currentRentCat = this.location.path().split('/');
    const isContainRentCat = (el) => (el === '') || (el === 'limo-service') || (el === 'airport-transfer');
    this.currentRentCat = currentRentCat.find(isContainRentCat);
    this.rentCategoryBreadcrumb = this.currentRentCat;
    const isContain = (el) => (el === LanguageType.ENGLISH) || (el === LanguageType.THAI) || (el === 'zh-cn') ;
    const langFound = currentRentCat.find(isContain);
    switch(langFound) {
      case LanguageType.ENGLISH :
      this.currentLang = LanguageType.ENGLISH;
      break;
      case LanguageType.THAI :
      this.currentLang = LanguageType.THAI;
      break;
      case LanguageType.CHINESE_FULL :
      this.currentLang = LanguageType.CHINESE_FULL;
      break;
      default:
      this.currentLang = this.translate.getDefaultLang();
    }
    switch(this.currentRentCat){
      case 'airport-transfer':
        this.rentalCategory = Enums.RentalCategory.AirportTransfer;
        break;
      case '':
        this.rentalCategory = Enums.RentalCategory.Car;
        break;
      case 'limo-service':
        this.rentalCategory = Enums.RentalCategory.CarWithDriver;
        break;
      default:
        this.rentalCategory = Enums.RentalCategory.Subscription;
    }
    this.loadData();
  }

  loadData = async() => {
    const response = await this.landingpagesservice.getLandingPageByRentalCategory(this.rentalCategory, `${this.currentLang}/car-rental`) as ILandingPageList;
    if(response.pageData.length > 0) {
      this.pageMetaInfo = response.pageData;
      this.title.setTitle(this.pageMetaInfo[0].metaTitle);
      this.meta.addTag({name: 'keywords', content: this.pageMetaInfo[0].metaKeyword});
      this.meta.addTag({name: 'description', content: this.pageMetaInfo[0].metaDesc});
      this.topDestinations = await this.landingpagesservice.getTopDestinations(this.rentalCategory) as ITopDestinations;
      this.topBrands = await this.landingpagesservice.getTopBrands(this.rentalCategory) as ITopBrands;
      this.topMakes = await this.landingpagesservice.getTopMakes(this.rentalCategory) as ITopMakes;
      this.topReviews = await this.landingpagesservice.getTopReviews(this.rentalCategory) as ITopReviews[];
      if(this.topReviews.length > 6) {
        this.moreReviews = true;
      }
      const schema = {
        "@context": "http://schema.org/",
        "@type": "Service",
        "name": "เช่ารถเชียงราย",
        "url" : "https://www.drivemate.asia/car-rental",
        "description": "Drivemate บริการรถเช่าเชียงราย ราคาถูกที่สุด รถคุณภาพดี มีหลากหลายรุ่นให้เลือกกว่า 100 รุ่น เลือกสถานที่รับและส่งคืนได้ในเชียงราย" ,
          "serviceType": "Car Rental Service",
          "provider": {
        "@type" : "Organization",
          "name" : "Drivemate",
          "image" : "https://www.drivemate.asia/static/images/web/front-office/favicon/android-icon-192x192.png",
          "description" : "Drivemate บริการรถเช่า และปล่อยเช่ารถ ที่จะสามารถให้คุณค้นหาและเช่ารถใกล้บ้านของคุณ เช่ารถ กรุงเทพ ราคาถูก",
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
      schema['name'] = this.pageMetaInfo[0].schemaName || schema['name'];
      schema['url'] = this.pageMetaInfo[0].schemaUrl || schema['url'];
      schema['description'] = this.pageMetaInfo[0].schemaDesc || schema['description'];
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
    } else {
      this.NoPageFound = true;
    }
  }

  loadMoreReviews = async() => {
    const response = await this.landingpagesservice.getMoreReviews(this.rentalCategory) as ITopReviews[];
    response.forEach(res => {
      this.topReviews.push(res);
    })
    this.moreReviews = false;
  }
}
