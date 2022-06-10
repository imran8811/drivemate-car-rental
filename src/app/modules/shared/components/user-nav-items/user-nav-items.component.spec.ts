import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavItemsComponent } from './user-nav-items.component';

describe('UserNavItemsComponent', () => {
  let component: UserNavItemsComponent;
  let fixture: ComponentFixture<UserNavItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
