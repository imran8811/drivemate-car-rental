import { Component, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { ICarouselData } from '../../../../models';

@Component({
  selector: 'app-carousel-locations',
  templateUrl: './carousel-locations.component.html',
  styleUrls: ['./carousel-locations.component.scss']
})
export class CarouselLocationsComponent {
  @Input() carouselData: ICarouselData[] = [];
  @Input() customOptions: OwlOptions;

  constructor() {}

  currentUrl: any;
  fragment: string;

  activeSlides: SlidesOutputData;
  getPassedData(data: any) {
    this.activeSlides = data;
  }

  getChangeData(data: any) {
    this.activeSlides = data;
  }

  getChangedData(data: any) {
    this.activeSlides = data;
  }
}
