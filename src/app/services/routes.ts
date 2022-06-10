export class Routes {
  static baseAddress = window.location.origin !== 'http://localhost:4200' ? `${window.location.origin}/api` : 'https://dev.otoz.biz/api';
  // =============================== asset-management =============================== //
  static GET_MAKES = Routes.baseAddress + '/makes/get-active-makes';
  static GET_PLACES = Routes.baseAddress + '/place';
  static GET_PLACES_GROUPED_BY_CITIES = Routes.baseAddress + '/place/get-places-grouped-by-city';
  static GET_ASSET_REFERENCE_DATA = Routes.baseAddress + '/asset-management/reference-data/get-lookups';
  static GET_MODELS = Routes.baseAddress + '/asset-management/models/get/paginated-data';

  // =============================== member-management ============================== //
  static GET_USER_INFORMATION = Routes.baseAddress + '/member-management/profile/';
  static UPDATE_MEMBER_DOCUMENTS = Routes.baseAddress + '/member-management/profile/updateDocs';
  static UPDATE_USER_PROFILE = Routes.baseAddress + '/member-management/profile/updateMyProfile';
  static RESEND_VERIFICATION_EMAIL = Routes.baseAddress + '/member-management/profile/verify/resend-verification-email';
  static VERIFY_EMAIL = Routes.baseAddress + '/member-management/profile/verify-email';
  static RESEND_PHONE_PIN = Routes.baseAddress + '/member-management/profile/verify/resend-phone-pin';
  static VERIFY_PIN_CODE = Routes.baseAddress + '/member-management/profile/verify/phone';
  static UPDATE_PHONE_NUMBER = Routes.baseAddress + '/member-management/profile/update/phone-number';
  static MEMBER_VERIFICATION_STATUS = Routes.baseAddress + '/member-management/profile/get/member-verification-status';
  static UPDATE_CORPORATE_USER_PROFILE = Routes.baseAddress + '/member-management/profile/corporate-user-update-profile';
  static GET_MEMBER_DETAIL_BY_IDS = Routes.baseAddress + '/member-management/profile/get-members';
  static UPDATE_DEFAULT_LANGUAGE = Routes.baseAddress + '/member-management/profile/update/default-language';

  // =============================== asset-search =================================== //
  static SEARCH_ASSETS = Routes.baseAddress + '/search';
  static SEARCH_BACKUP_ASSETS = Routes.baseAddress + '/search/backup';
  static SEARCH_RECOMMENDED_ASSETS = Routes.baseAddress + '/search/recommended-assets';

  // =============================== booking-management ============================= //
  static GET_BOOKING_REFERENCE_DATA = Routes.baseAddress + '/booking-management/reference-data/get-lookups';

  // =============================== platform-management ========================== //
  static GET_REFERENCE_DATA_LOOKUPS = Routes.baseAddress + '/platform-management/reference-data/get-lookups';
  static GET_LANGUAGES = Routes.baseAddress + '/platform-management/reference-data/get-lookups';
  // =============================== review-management ============================ //

  // =============================== Template Pages ====================== //
  static GET_TOP_DESTINATIONS_BY_RENTAL_CATEGORY = Routes.baseAddress + '/asset-management/top-assets-makes';
  static GET_TOP_BRANDS_BY_RENTAL_CATEGORY = Routes.baseAddress + '/asset-management/top-assets-makes';
  static GET_TOP_MAKES_BY_RENTAL_CATEGORY = Routes.baseAddress + '/asset-management/top-assets-types';
  static GET_TOP_REVIEWS_BY_RENTAL_CATEGORY = Routes.baseAddress + '/review-management/rating-reviews/get-top-renter-reviews';
  static GET_LANDING_PAGE_BY_RENTAL_CATEGORY = Routes.baseAddress + '/platform-management/landing-page/get/all';
  // =============================== Template Pages ====================== //

  // =============================== Important Places ============================= //
  static GET_IMPORTANTPLACES = Routes.baseAddress + '/place/';
  static GET_IMPORTANT_PLACES_WITH_PAGINATION = Routes.baseAddress + '/place/get-paginated-data';
  // =============================== Important Places ============================= //

   // =============================== tenant-management ============================== //
   static GET_TENANT_CONFIGURATIONS = Routes.baseAddress + '/tenants/configs/getConfig';
   // =============================== tenant-management ============================== //

}
