import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDataRoutingModule } from './country-data-routing.module';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    CountryDataRoutingModule,
    SharedModule
  ]
})
export class CountryDataModule { }
