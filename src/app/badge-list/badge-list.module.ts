import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeListRoutingModule } from './badge-list-routing.module';
import { BadgeListScreenComponent } from './components/badge-list-screen/badge-list-screen.component';
import { SharedModule } from '../shared/shared.module';
import { BadgeListComponent } from './components/badge-list/badge-list.component';


@NgModule({
  declarations: [BadgeListScreenComponent, BadgeListComponent],
  imports: [
    CommonModule,
    BadgeListRoutingModule,
    SharedModule
  ]
})
export class BadgeListModule { }
