import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DetailsPostComponent } from './../../posts/details-post/details-post.component';
import { PostComponent } from './../../posts/post/post.component';
@NgModule({
  declarations: [
    HomeComponent,
    DetailsPostComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
