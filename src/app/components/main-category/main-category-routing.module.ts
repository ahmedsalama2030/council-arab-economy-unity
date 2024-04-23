import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCategoryComponent } from './main-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: ":categoryId",
        component: MainCategoryComponent,
      },
      {
        path: ":categoryId/details",
        component: CategoryDetailsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainCategoryRoutingModule { }
