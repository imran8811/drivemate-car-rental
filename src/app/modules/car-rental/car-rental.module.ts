import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { CarRentalRoutingModule } from './car-rental-routing.module';
import { PipesModule } from '../../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
// import { NgxJsonLdModule } from '@ngx-lite/json-ld';

import {
  CarRentalComponent,
  DetailsComponent,
} from './components';

@NgModule({
  declarations: [
    CarRentalComponent,
    DetailsComponent,
  ],
  imports: [
    RouterModule,
    CarRentalRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    TranslateModule,
    LocalizeRouterModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CarRentalModule { }
