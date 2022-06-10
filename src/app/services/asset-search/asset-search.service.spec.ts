import { TestBed } from '@angular/core/testing';

import { AssetSearchService } from './asset-search.service';

describe('AssetSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetSearchService = TestBed.get(AssetSearchService);
    expect(service).toBeTruthy();
  });
});
