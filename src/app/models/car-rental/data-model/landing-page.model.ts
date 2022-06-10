export interface ILandingPage {
  _id: string;
  languageCode: string;
  languageDisplayName: string;
  pageTypeCode: string;
  pageTypeDisplayName: string;
  _primaryKeywordId?: string;
  primaryKeywordName?: string;
  _secondaryKeywordId?: string;
  secondaryKeywordName?: string;
  title: string;
  content: string;
  photoHeaderCover?: string;
  photoCover?: string;
  _importantPlaceId?: string;
  importantPlaceName?: string;
  rentalCategoryCode: string;
  rentalCategoryDisplayName: string;
  metaTitle: string;
  metaDesc: string;
  metaKeyword: string;
  headerTitle: string;
  headerTitleTwo?: string;
  linkTitle: string;
  imgAlt: string;
  _makeId?: string;
  makeName?: string;
  _modelId?: string;
  assetModelName?: string;
  releaseYear?: number;
  carTypeCode: string;
  carTypeDisplayName: string;
  colorCode: string;
  colorDisplayName: string;
  pricePerDay: string;
  pickupAt: string;
  returnAt: string;
  publish: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
  schemaName: string;
  schemaUrl: string;
  schemaDesc: string;
  schemaServiceType: string;
}

export class LandingPage implements ILandingPage {
    _id: '';
    languageCode = '';
    languageDisplayName = '';
    pageTypeCode = '';
    pageTypeDisplayName = '';
    _primaryKeywordId = '';
    primaryKeywordName = '';
    _secondaryKeywordId = '';
    secondaryKeywordName = '';
    title = '';
    content = '';
    photoHeaderCover = '';
    photoCover = '';
    _importantPlaceId = '';
    importantPlaceName = '';
    rentalCategoryCode = '';
    rentalCategoryDisplayName = '';
    metaTitle = '';
    metaDesc = '';
    metaKeyword = '';
    headerTitle = '';
    headerTitleTwo = '';
    linkTitle = '';
    imgAlt = '';
    _makeId = '';
    makeName = '';
    _modelId = '';
    assetModelName = '';
    releaseYear = 0;
    carTypeCode =  '';
    carTypeDisplayName = '';
    colorCode = '';
    colorDisplayName = '';
    pricePerDay = '';
    pickupAt = '';
    returnAt = '';
    publish = true;
    slug = '';
    createdAt = '';
    updatedAt = '';
    schemaName = '';
    schemaUrl = '';
    schemaDesc = '';
    schemaServiceType = '';
}