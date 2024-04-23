import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralSecretaryComponent } from './general-secretary.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: GeneralSecretaryComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralSecretaryRoutingModule { }
