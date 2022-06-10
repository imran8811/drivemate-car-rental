import { TestBed } from '@angular/core/testing';
import { LookupManagementService } from './lookup-management.service';


describe('LookupManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LookupManagementService = TestBed.get(LookupManagementService);
    expect(service).toBeTruthy();
  });
});
