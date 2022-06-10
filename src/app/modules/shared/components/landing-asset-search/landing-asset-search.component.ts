import { Component, OnInit, Input, ViewChild, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { OwlDateTimeComponent } from 'ng-pick-datetime';

import { ICity, IPlace, City, Place, IBookingDuration, IConfigurations } from '../../../../models';
import { AssetSearchService, MemberManagementService } from '../../../../services';
import { Configurations, RentalCategories, LanguageType } from '../../../../enums';
import { DEFAULT_CALENDAR_GAP, NAVIGATION, STATIC_BASE_URL } from '../../../../constants';
import { Enums } from '@otoz/constants';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-asset-search',
  templateUrl: './landing-asset-search.component.html',
  styleUrls: ['./landing-asset-search.component.scss']
})


export class LandingAssetSearchComponent implements OnInit, OnDestroy {
  defaultLang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') ? localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') : LanguageType.THAI;
  @Input() searchLocation: string;
  @ViewChild('dtRange1', { static: true }) dtRange1: OwlDateTimeComponent<Date>;
  @ViewChild('dtRange2', { static: true }) dtRange2: OwlDateTimeComponent<Date>;
  @ViewChild('txtRang2', { static: true }) txtRang2: ElementRef;

  PlaceType = {
    Airport : 'Airport',
    ShoppingMall : 'ShoppingMall',
    AmusementPark : 'AmusementPark',
    City : 'City',
    Station : 'Station',
    Location : 'Location'
  }

  readonly PlaceTypes = this.PlaceType;

  basicSearch = this.searchCarService.basicSearch;
  cities: ICity[] = [];
  minDate = new Date();
  startDate: Date;
  endDate: Date;
  dateRange: Date[];
  oldDateRange: Date[] = [];
  fromTime = '';
  toTime = '';
  location = '';
  locationValid = true;
  currentRentCat = '';
  rentalCategory = RentalCategories.CAR;
  isCollapsed = true;
  dropOffAddressValid = true;
  dropOffAddress = '';
  carDuration: number = 0;
  defaultBookingDuration = "configuration.defaultBookingDuration";
  subscription: Subscription;
  bookingDuration: IBookingDuration[];
  configuration: IConfigurations

  topLocations = [
    {
      name    : 'bangkok',
      thai    : 'กรุงเทพมหานคร',
      chinese : '曼谷',
      cityLat : 13.7563,
      cityLng : 100.5018
    },
    {
      name    : 'pattaya',
      thai    : 'พัทยา',
      chinese : '芭堤雅',
      cityLat : 12.9236,
      cityLng : 100.8825
    },
    {
      name    : 'chiangmai',
      thai    : 'เชียงใหม่',
      chinese : '清迈',
      cityLat : 18.7953,
      cityLng : 98.9620
    },
    {
      name    : 'phuket',
      thai    : 'ภูเก็ต',
      chinese : '普吉岛',
      cityLat : 7.8804,
      cityLng : 98.3923
    },
    {
      name    : 'krabi',
      thai    : 'กระบี่',
      chinese : '甲米',
      cityLat : 8.0855,
      cityLng : 98.9063
    },
    {
      name    : 'nonthaburi',
      thai    : 'นนทบุรี',
      chinese : '暖武里',
      cityLat : 13.8591,
      cityLng : 100.5217
    },
    {
      name    : 'phitsanulok',
      thai    : 'พิษณุโลก',
      chinese : '彭世洛',
      cityLat : 16.8211,
      cityLng : 100.2659
    },
    {
      name    : 'samutprakarn',
      thai    : 'สมุทรปราการ',
      chinese : '龙仔Pra',
      cityLat : 13.5991,
      cityLng : 100.5998
    },
    {
      name    : 'huahin',
      thai    : 'หัวหิน',
      chinese : '华欣',
      cityLat : 12.5684,
      cityLng : 99.9577
    },
    {
      name    : 'nakhon-si-thammarat',
      thai    : 'นครศรีธรรมราช',
      chinese : '那空达他叻',
      cityLat : 8.4304,
      cityLng : 99.9631
    },
    {
      name    : 'surat-thani',
      thai    : 'สุราษฎร์ธานี',
      chinese : '素叻他尼',
      cityLat : 9.1342,
      cityLng : 99.3334
    },
    {
      name    : 'chumphon',
      thai    : 'ชุมพร',
      chinese : '春蓬',
      cityLat : 10.4930,
      cityLng : 99.1800
    },
    {
      name    : 'ranong',
      thai    : 'ระนอง',
      chinese : '拉廊',
      cityLat : 9.9529,
      cityLng : 98.6085
    },
    {
      name    : 'kohsamui',
      thai    : 'เกาะสมุย',
      chinese : '苏梅岛',
      cityLat : 9.5120,
      cityLng : 100.0136
    },
    {
      name    : 'hatyai',
      thai    : 'หาดใหญ่',
      chinese : '合艾',
      cityLat : 7.0086,
      cityLng : 100.4747
    },
    {
      name    : 'chiangrai',
      thai    : 'เชียงราย',
      chinese : '清莱',
      cityLat : 19.9105,
      cityLng : 99.8406
    },
    {
      name    : 'nan',
      thai    : 'น่าน',
      chinese : '楠',
      cityLat : 18.7839,
      cityLng : 100.7790
    },
    {
      name    : 'lampang',
      thai    : 'ลำปาง',
      chinese : '南邦',
      cityLat : 18.2855,
      cityLng : 99.5128
    },
    {
      name    : 'khonkean',
      thai    : 'ขอนแก่น',
      chinese : '孔敬',
      cityLat : 16.4322,
      cityLng : 102.8236
    },
    {
      name    : 'ubon-ratchathani',
      thai    : 'อุบลราชธานี',
      chinese : '乌汶叻差他尼',
      cityLat : 15.2448,
      cityLng : 104.8473
    },
    {
      name    : 'udonthani',
      thai    : 'อุดรธานี',
      chinese : '乌隆他尼',
      cityLat : 17.3647,
      cityLng : 102.8159
    },
    {
      name    : 'sakonakhon',
      thai    : 'สกลนคร',
      chinese : '沙功那空',
      cityLat : 17.1664,
      cityLng : 104.1486
    },
    {
      name    : 'now',
      thai    : 'ตอนนี้',
      chinese : '现在',
      cityLat : 13.8591,
      cityLng : 100.5217
    },
    {
      name    : 'loei',
      thai    : 'เลย',
      chinese : '黎',
      cityLat : 17.4860,
      cityLng : 101.7223
    },
    {
      name    : 'chonburi',
      thai    : 'ชลบุรี',
      chinese : '春武里',
      cityLat : 13.3611,
      cityLng : 100.9847
    },
    {
      name    : 'buriram',
      thai    : 'บุรีรัมย์',
      chinese : '武里喃',
      cityLat : 14.9951,
      cityLng : 103.1116
    },
    {
      name    : 'suvarnabhumi-airport',
      thai    : 'สนามบินสุวรรณภูมิ',
      chinese : '素万那普机场',
      cityLat : 13.6900,
      cityLng : 100.7501
    },
    {
      name    : 'chiangmai-airport',
      thai    : 'สนามบินนานาชาติเชียงใหม่',
      chinese : '清迈国际机场',
      cityLat : 18.7677,
      cityLng : 98.9640
    },
    {
      name    : 'phuket-airport',
      thai    : 'สนามบินนานาชาติภูเก็ต',
      chinese : '普吉国际机场',
      cityLat : 8.1111,
      cityLng : 98.3065
    },
    {
      name    : 'donmueang-airport',
      thai    : 'สนามบินดอนเมือง',
      chinese : '廊曼国际机场',
      cityLat : 13.9133,
      cityLng : 100.6042
    }
  ];

  constructor(
    private searchCarService: AssetSearchService,
    private memberManagementService: MemberManagementService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.loadConfiguration();
    const findLocation = this.topLocations.filter(loc => loc.name === this.searchLocation);
    this.location = findLocation.length != 0? this.searchLocation.replace('-', ' ') : 'Bangkok';
    this.loadInitialData();

  }

  loadConfiguration = async () => {
    this.configuration = await this.memberManagementService.LoadConfigurations(this.defaultBookingDuration) as IConfigurations;
    this.carDuration = this.configuration[this.defaultBookingDuration].find(f => f.rentalCategoryCode === Enums.RentalCategory.Car).duration;
    this.minDate = new Date(new Date().setHours(new Date().getHours() + DEFAULT_CALENDAR_GAP.find(value=> value.rentalCategory === Enums.RentalCategory.Car).valueInHours));
    this.startDate = (d => new Date(new Date(new Date(this.minDate)).setMinutes((Math.ceil(d.getMinutes() / 30)) * 30)))(new Date());
    this.endDate = (d => new Date(new Date(new Date(this.minDate).setDate(this.minDate.getDate() + this.carDuration)).setMinutes((Math.ceil(this.minDate.getMinutes() / 30)) * 30)))(new Date());
    this.dateRange = [this.startDate, this.endDate];
    this.oldDateRange = [this.startDate, this.endDate];
    this.fromTime = this.timeConvert(this.dateRange[0]);
    this.toTime = this.timeConvert(this.dateRange[1]);
  }

  loadInitialData = () => {
    // this.location = this.searchLocation.replace('-', ' ');
    this.basicSearch = this.searchCarService.basicSearch;
    this.basicSearch.rentCategoryCode = this.rentalCategory;
    this.basicSearch.rentCategoryDisplayName = this.rentalCategory;
    this.loadData(this.translate.currentLang);
    this.subscription = this.translate.onLangChange.subscribe((language: any) => {
      this.loadData(language.lang);
    });
    
  }

  loadData = async (lang:string) => {
    this.cities = await this.searchCarService.getPlacesGroupedByCities(lang) as ICity[];
    const city: ICity = (this.cities && this.cities.length > 0) ? this.cities.find(f => f.name.toLowerCase() === this.location.toLowerCase()) : new City();
    const place: IPlace = (city && city.places && city.places.length > 0) ? city.places.find(f => f.name.toLowerCase() === 'bangkok') : new Place();
    this.basicSearch.location = (place) ? place.name : '';
    this.basicSearch.cityLng = (place) ? place.location.coordinates[0] : null;
    this.basicSearch.cityLat = (place) ? place.location.coordinates[1] : null;
  }

  onPickupAddressChanged = (location, longitude, latitude) => {
    this.location = location;
    this.basicSearch.location = location;
    this.basicSearch.cityLng = longitude;
    this.basicSearch.cityLat = latitude;
  }

  navigateToSearch = async () => {
    this.locationValid = (this.location) ? true : false;
    if(this.location === '') {
      return;
    }
    this.basicSearch.isTransferBackToAirport = false;
    this.basicSearch.startDate = (this.dateRange.length > 0) ? this.dateRange[0] ? this.dateRange[0].toISOString() : '' : '';
    this.basicSearch.endDate = (this.dateRange.length > 1) ? this.dateRange[1] ? this.dateRange[1].toISOString() : '' : '';
    // this.basicSearch = await this.searchCarService.resetSearchCriteria();
    localStorage.setItem(Configurations.SEARCH_CRITERIA, JSON.stringify(this.basicSearch));
    this.defaultLang === 'th'? window.location.href=`${STATIC_BASE_URL}${NAVIGATION.AVAILABLE_ASSETS}` : window.location.href=`${STATIC_BASE_URL}/en${NAVIGATION.AVAILABLE_ASSETS}`
  }

  onPickupDateChanged = () => {
    if (this.oldDateRange[0] !== this.dateRange[0]) {
      const hours = this.oldDateRange[0].getHours();
      const minutes = this.oldDateRange[0].getMinutes();
      const pickupDate = new Date(new Date(new Date(this.dateRange[0]).setHours(hours)).setMinutes(minutes));
      this.dateRange[0] = pickupDate;
      const returnDate = new Date(new Date(new Date(this.dateRange[0]).setDate(this.dateRange[0].getDate() + this.carDuration)).setMinutes((Math.ceil(this.dateRange[0].getMinutes() / 30)) * 30));
      this.dateRange[1] = returnDate;
      this.txtRang2.nativeElement.click();
      this.dtRange1.confirmSelectedChange.emit(this.dateRange);
      this.dtRange2.confirmSelectedChange.emit(this.dateRange);
    }
  }

  afterPickupPickerOpen = () => {
    this.oldDateRange = this.dateRange;
  }

  onDropoffDateChanged = () => {
    if (this.oldDateRange[1] !== this.dateRange[1]) {
      const hours = this.oldDateRange[1].getHours();
      const minutes = this.oldDateRange[1].getMinutes();
      const dropoffDate = new Date(new Date(new Date(this.dateRange[1]).setHours(hours)).setMinutes(minutes));
      this.dateRange[1] = dropoffDate;
      let pickupDate;
      if (this.dateRange[0]) {
        if (this.minDate >= this.dateRange[0]) {
          pickupDate = (d => new Date(d.setDate(d.getDate() + 1)))(new Date());
        } else {
          pickupDate = this.dateRange[0];
        }
      } else {
        if (this.minDate >= new Date(new Date(this.dateRange[1]).setDate(this.dateRange[1].getDay() - 1))) {
          pickupDate = this.dateRange[1];
        } else {
          pickupDate = (d => new Date(new Date(this.dateRange[1]).setHours(d.getHours() - 1)))(new Date());
        }
      }
      this.dateRange[0] = new Date(new Date(pickupDate).setMinutes((Math.ceil(pickupDate.getMinutes() / 30)) * 30));
      if (this.dateRange[1]) {
        if (this.dateRange[0] >= this.dateRange[1]) {
          this.dateRange[1] = new Date(new Date(new Date(this.dateRange[0]).setHours(this.dateRange[0].getHours() + 1)).setMinutes((Math.ceil(this.dateRange[0].getMinutes() / 30)) * 30));
        }
      }

      this.fromTime = this.timeConvert(this.dateRange[0]);
      this.toTime = this.timeConvert(this.dateRange[1]);

      this.dtRange1.confirmSelectedChange.emit(this.dateRange);
      this.dtRange2.confirmSelectedChange.emit(this.dateRange);
     }
  }

  @HostListener('window:click', ['$event'])
  handleClickEvent(event: any) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (target.classList.contains('NOT_CLOSE')) {
      if (!target.classList.contains('NO_ACTION')) {
        this.isCollapsed = false;
      }
    } else {
      this.isCollapsed = true;
    }
  }

  setFromTime = (time: string) => {
    const dateTime = new Date(this.dateRange[0].getFullYear(), this.dateRange[0].getMonth(), this.dateRange[0].getDate(), parseInt(time.split(':')[0], 0), parseInt(time.split(':')[1], 0));
    if (dateTime > this.minDate) {
      this.fromTime = time;
      this.dateRange[0] = dateTime;
      if (dateTime >= this.dateRange[1]) {
        this.toTime = this.timeConvert(new Date(new Date(new Date(this.dateRange[0]).setHours(this.dateRange[0].getHours() + 1)).setMinutes((Math.ceil(this.dateRange[0].getMinutes() / 30)) * 30)));
        this.dateRange[1] = this.dateRange[0];
      }
      this.dtRange1.confirmSelectedChange.emit(this.dateRange);
      this.dtRange2.confirmSelectedChange.emit(this.dateRange);
    }
  }

  setToTime = (time: string) => {
    const dateTime = new Date(this.dateRange[1].getFullYear(), this.dateRange[1].getMonth(), this.dateRange[1].getDate(), parseInt(time.split(':')[0], 0), parseInt(time.split(':')[1], 0));
    if (dateTime > this.dateRange[0]) {
      this.toTime = time;
      this.dateRange[1] = dateTime;
      this.dtRange1.confirmSelectedChange.emit(this.dateRange);
      this.dtRange2.confirmSelectedChange.emit(this.dateRange);
    } else {
      this.toTime = this.timeConvert(new Date(new Date(new Date(this.dateRange[0]).setHours(this.dateRange[0].getHours() + 1)).setMinutes((Math.ceil(this.dateRange[0].getMinutes() / 30)) * 30)));
      this.dateRange[1] = this.dateRange[0];
      this.dtRange1.confirmSelectedChange.emit(this.dateRange);
      this.dtRange2.confirmSelectedChange.emit(this.dateRange);
    }
  }

  timeConvert = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return hours + ':' + (minutes === 0 ? '00' : minutes);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
