import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BadgeComponent } from './badge/badge.component';
import { SkeletonComponent } from './skeleton/skeleton.component';



@NgModule({
  declarations: [NavBarComponent, BadgeComponent, SkeletonComponent],
  exports: [
    NavBarComponent,
    BadgeComponent,
    SkeletonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
  ]
})
export class SharedModule { }
