import { IAsset } from '../../asset-models/data-model/asset';

export interface ISearchResponse {
  assets: IAsset[];
  pageData: IAsset[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export class SearchResponse implements ISearchResponse {
  assets = [];
  pageData = [];
  limit = 0;
  page = 0;
  pages = 0;
  total = 0;
}
