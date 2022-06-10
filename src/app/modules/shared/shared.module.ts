import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { PipesModule } from '../../pipes/pipes.module';

import {
  FooterComponent,
  HeaderComponent,
  LandingAssetSearchComponent,
  CarouselLocationsComponent,
  UserNavItemsComponent
} from './components';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LandingAssetSearchComponent,
    CarouselLocationsComponent,
    UserNavItemsComponent
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    LandingAssetSearchComponent,
    CarouselLocationsComponent,
    UserNavItemsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    LocalizeRouterModule,
    TranslateModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule,
    BsDropdownModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'en-GB'}
  ]
})

export class SharedModule { }
