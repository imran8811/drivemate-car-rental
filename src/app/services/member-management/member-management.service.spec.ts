import { TestBed } from '@angular/core/testing';

import { MemberManagementService } from './member-management.service';

describe('MemberManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberManagementService = TestBed.get(MemberManagementService);
    expect(service).toBeTruthy();
  });
});
