import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BsDropdownModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslateModule
  ]
})
export class SharedModule { }
