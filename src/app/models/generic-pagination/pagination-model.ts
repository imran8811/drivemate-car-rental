

export interface IPagination<T> {
  pageData: T[];
  page: number;
  total: number;
  limit: number;
  pages: number;
}

export class Pagination<T> implements IPagination<T> {
  pageData = [];
  page = 0;
  total = 0;
  limit = 0;
  pages = 0;
}