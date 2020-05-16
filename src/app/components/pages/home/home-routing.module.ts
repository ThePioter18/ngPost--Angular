import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DetailsPostComponent } from '../../posts/details-post/details-post.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'post/:id',
    component: DetailsPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
