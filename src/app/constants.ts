// ============================= STATIC URL ============================= //
// export const STATIC_BASE_URL = window.location.origin !== 'http://localhost:4200' ? `${window.location.origin}` : 'http://dev.otoz.biz';
export const STATIC_BASE_URL = window.location.origin;

// ============================= ASSET SEARCH ============================= //
export const PAGE_NO = '1';
export const PAGE_SIZE = '10';
export const PAGE_SIZE_OPTIONS = ['10', '20', '30', '40', '50'];
// ======================================================================== //

// ============================= Validators =============================== //
export const ALLOWED_FILE_TYPES = ['jpg', 'jpeg', 'png', 'pdf'];
export const ALLOWED_PHOTO_TYPES = ['jpg', 'jpeg', 'png'];

export const REGEX = {
  ONLY_NUMBER: /^[0-9]*$/,
  ONLY_ALPHABET: /^[a-zA-Z|\u0E00-\u0E7F|\u4E00-\u9FCC]*$/,
  ALPHABET_WITH_SPACE: /^[a-zA-Z |\u0E00-\u0E7F |\u4E00-\u9FCC]*$/,
  ALPHABET_WITH_SPECIAL_CHARACTERS: /^[a-zA-Z0-9 &()\\\-_.,"\/ |\u0E00-\u0E7F |\u4E00-\u9FCC]*$/,
  ONLY_ALPHA_NUMERIC: /^[a-zA-Z0-9|\u0E00-\u0E7F|\u4E00-\u9FCC]*$/,
  ALPHA_NUMERIC_WITH_SPACE: /^[a-zA-Z0-9 |\u0E00-\u0E7F |\u4E00-\u9FCC]*$/,
  ALPHA_NUMERIC_WITH_DASH_AND_UNDERSCORE: /^[a-zA-Z0-9-_ |\u0E00-\u0E7F |\u4E00-\u9FCC]*$/,
  TIME_HH_MM: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
  REPLACE_SPACE_WITH_DASH: /\s+/g,
  NUMBER_WITH_SPACE: /^[0-9 ]*$/,
  ALPHA_NUMERIC_WITH_DASH: /^[a-zA-Z0-9- |\u0E00-\u0E7F |\u4E00-\u9FCC]*$/,
  ONLY_NUMBER_WITH_DECIMAL: /^\d+(\.\d+)?$/,
  ALPHA_NUMERIC_WITH_BRACKETS_AND_COMMA: /^[a-zA-Z0-9 ()., |\u0E00-\u0E7F |\u4E00-\u9FCC]*$/
};

export const TIME_OUT = 5000;
export const ALLOWED_DECIMAL_VALUE = '1.0-0';
export const ALL_LOCATIONS = 'All locations';
export const LOC_FREE = 'Free';

export const ALLOWED_DECIMAL_PLACES = 2;
export const DEFAULT_CURRENCY = 'THB';

export const TRANSMISSION_AUTOMATIC = 'Automatic';
export const TRANSMISSION_MANUAL = 'Manual';

export const TRANSACTION_STATUS_RETRY_COUNT = 5;

export const DATETIME_FORMATS = {
  DATE_FORMAT: 'DD-MM-YYYY HH:mm',
  CALENDAR_DATE_FORMAT: 'YYYY-MM-DD',
  MONTH_DATE_YEAR: 'MM-DD-YYYY',
  MONTH_DATE_YEAR_HOUR_MINUTS: 'MM-DD-YYYY HH:mm',
  MONTH_DATE_YEAR_WITH_FORWARDSLASH: 'MM/DD/YYYY',
  DATE_MONTH_YEAR: 'DD-MM-YYYY',
  SMALL_DATE_MONTH_YEAR: 'd-m-Y',
  SMALL_DATE_MONTH_YEAR_HOUR_MINUTS: 'd-m-Y H:i',
  START_OF_BUSNESS: '06:00',
  END_OF_BUSNESS: '21:00',
  DAYS_IN_NUMBER: 'dd',
  DAY_IN_WORDS: 'EEEE',
  MONTH_IN_WORDS: 'MMMM',
  SHORT_YEAR: 'yyyy',
  DAYS_OF_YEARS: 'D',
  SHORT_MONTH_YEAR: 'MMM yy',
  FULL_MONTH_YEAR: 'MMMM yyyy',
  SHORT_DAY: 'E',
  HOURS_MINUTS: 'HH:mm',
  SHORT_DAY_WITH_DATE_MONTH_YEAR: 'E, dd MMM yyyy',
  dd_MMM_yyyy_HH_mm: 'dd, MMM yyyy HH:mm',
  dd_MMM_yyyy: 'dd, MMM yyyy',
  YEAR: 'YYYY',
  MONTH: 'M',
  DAY: 'D',
  SHORT: 'short',
  MMM_D_Y_H_MM_SS_A: 'MMM. d, y, h:mm:ss a',
  MMM_D_Y_HH_MM_A: 'MMM. d, y, HH:mm a',
  mm_ss: 'mm:ss',
  d_M_yy_h_mm_a: 'd/M/yy, h:mm a',
  MMMM_Y: 'MMMM y',
  dd_MM_yyyy_HH_mm: 'dd-MM-yyyy HH:mm',
};

export const DEFAULT_PROFILE_IMAGE = '/assets/images/defaultProfilePic.png';
export const LINE = '/assets/images/line.png';
export const DRIVEMATE_LOGO = '/assets/images/new-images/logo.svg';
export const DEFAULT_CAR_IMAGE = '/assets/images/car_search_spr.png';

export const NAVIGATION = {
  HOME: STATIC_BASE_URL,
  ABOUT_ASSET: '/about-asset',
  AVAILABLE_ASSETS: '/available-assets',
  FAQS: '/site-layout/faqs',
  TERMS_OF_USE: '/term-of-services',
  ABOUT_US: '/about-us',
  CONTACT_US: '/contact-us',
  RENT_A_CAR: '/rent-a-car',
  ENTERPRISE: '/enterprise',
  PROMOTION: '/promotion',
  LIST_A_CAR: '/list-a-car',
  AIRPORT_TRANSFER: '/airport-transfer',
  CAR_RENTAL: '/car-rental',
  CAR_WITH_DRIVER: '/limo-service',
  MONTHLY_RENTAL: '/monthly-rental',
  KNOW_BEFORE_RENT: '/asset-creation/know-before-rentout',
  SIGN_UP: '/sign-up',
  USER_PROFILE_MANAGEMENT: '/user-profile-management',
  BACK_TO_MY_TRIP: '/trips-management/my-trips',
  MY_ORDER: '/order-management/my-orders',
  MANAGE_ASSETS: '/user-management/manage-assets',
  REQUEST_CHAT_LIST: '/requests',
  REWARD_POINTS_HISTORY: '/reward-points/reward-points-history',
  PRIVACY_POLICY: '/privacy-policy',
  SUPER_HOST : '/super-host',
  INSTANT_BOOKING : '/instant-booking',
  BMW : '/bmw',
  INSURANCE : '/insurance'
};

export const OG_TAGS = {
  LINE: 'https://line.me/ti/p/%40drivemate',
  PHONE: '02-026-3238'
};

export const LANDING_PAGE_TYPES = {
  POST: 'Post',
  BRAND: 'Brand',
  MODEL: 'Model',
  PROVINCE: 'Province',
  CAR_LIST: 'CarList',
  RENT_CAR: 'RentCar',
};

export const MONTHLY_RENTAL_PACKAGES = [
  { code: '1', name: 'MONTHLY_RENT.PACKAGE_LITE', miles: 'MONTHLY_RENT.UNLIMITED_MILES', price: '13,500', numberOfSwitches: '1', insurancePackageName: 'MONTHLY_RENT.FIRST_CLASS_INSURANCE', securityDeposit: '', engine: '1200', logo: '../../../../../assets/images/packages/lite-plan.png' },
  { code: '2', name: 'MONTHLY_RENT.PACKAGE_STANDARD', price: '25,000', miles: 'MONTHLY_RENT.UNLIMITED_MILES', numberOfSwitches: '1', insurancePackageName: 'MONTHLY_RENT.FIRST_CLASS_INSURANCE', securityDeposit: '', engine: '1600', logo: '../../../../../assets/images/packages/standard-plan.png' },
  { code: '3', name: 'MONTHLY_RENT.PACKAGE_BMW_X1', price: '39,999', miles: 'MONTHLY_RENT.UNLIMITED_MILES', numberOfSwitches: '', insurancePackageName: 'MONTHLY_RENT.DEDUCTABLE_INSURANCE', securityDeposit: '20,000', engine: '', logo: '../../../../../assets/images/packages/X1_800x200.png' },
  { code: '4', name: 'MONTHLY_RENT.PACKAGE_BMW_SERIES3', price: '49,999', miles: 'MONTHLY_RENT.UNLIMITED_MILES', numberOfSwitches: '', insurancePackageName: 'MONTHLY_RENT.DEDUCTABLE_INSURANCE', securityDeposit: '20,000', engine: '', logo: '../../../../../assets/images/packages/series3_Black_800x200.png' }
];

// ============================= FLAG Image Path ============================= //
export const FLAG_IMAGE = {
  ENGLISH: '/assets/images/new-images/flags/flag-en.svg',
  THAI: '/assets/images/new-images/flags/flag-th.svg',
  CHINESE: '/assets/images/new-images/flags/flag-zh-cn.svg',
}

export const DEFAULT_CALENDAR_GAP = [
  {
    rentalCategory: 'Car',
    valueInHours: 24
  },
  {
    rentalCategory: 'CarWithDriver',
    valueInHours: 6
  },
  {
    rentalCategory: 'AirportTransfer',
    valueInHours: 2
  }
]
