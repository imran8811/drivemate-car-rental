import { ILandingPage } from './landing-page.model';

export interface ILandingPageList {
  pageData: ILandingPage[],
  page: string,
  total: string,
  pages: string,
}

export class LandingPageList implements ILandingPageList {
  pageData: [];
  page: '';
  total: '';
  pages: '';
}
