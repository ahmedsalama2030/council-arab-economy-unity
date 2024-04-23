import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainCategoryRoutingModule } from './main-category-routing.module';
import { MainCategoryComponent } from './main-category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryDetailsComponent } from './category-details/category-details.component';


@NgModule({
  declarations: [
    MainCategoryComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    MainCategoryRoutingModule,
    SharedModule
  ]
})
export class MainCategoryModule { }
