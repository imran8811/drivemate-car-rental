import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAssetSearchComponent } from './landing-asset-search.component';

describe('LandingAssetSearchComponent', () => {
  let component: LandingAssetSearchComponent;
  let fixture: ComponentFixture<LandingAssetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingAssetSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAssetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
