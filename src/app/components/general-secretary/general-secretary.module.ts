import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralSecretaryRoutingModule } from './general-secretary-routing.module';
import { GeneralSecretaryComponent } from './general-secretary.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GeneralSecretaryComponent
  ],
  imports: [
    CommonModule,
    GeneralSecretaryRoutingModule,
    SharedModule
  ]
})
export class GeneralSecretaryModule { }
