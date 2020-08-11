import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeDetailRoutingModule } from './badge-detail-routing.module';
import { BadgeDetailScreenComponent } from './components/badge-detail-screen/badge-detail-screen.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BadgeDetailScreenComponent],
  imports: [
    CommonModule,
    BadgeDetailRoutingModule,
    SharedModule,
  ]
})
export class BadgeDetailModule { }
