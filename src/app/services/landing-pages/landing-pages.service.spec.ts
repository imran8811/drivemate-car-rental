import { TestBed } from '@angular/core/testing';

import { LandingPagesService } from './landing-pages.service';

describe('LandingPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandingPagesService = TestBed.get(LandingPagesService);
    expect(service).toBeTruthy();
  });
});
