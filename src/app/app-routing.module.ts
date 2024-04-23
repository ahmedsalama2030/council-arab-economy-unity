import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { content } from './shared/routes/routes';
import { ContentComponent } from './shared/layout/content/content.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentComponent,
    children: content,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
