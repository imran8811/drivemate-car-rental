import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselLocationsComponent } from './carousel-locations.component';


describe('CarouselLocationsComponent', () => {
  let component: CarouselLocationsComponent;
  let fixture: ComponentFixture<CarouselLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
