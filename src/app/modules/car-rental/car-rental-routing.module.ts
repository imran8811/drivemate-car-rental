import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import {
  CarRentalComponent,
  DetailsComponent
} from './components';

const routes: Routes = [
    { path: '', component: CarRentalComponent },
    { path: ':pageType', component: DetailsComponent },
    // { path: ':pageType/:model', component: DetailsComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class CarRentalRoutingModule { }
