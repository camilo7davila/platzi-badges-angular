import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BadgeRoutingModule } from './badge-routing.module';
import { BadgeScreenComponent } from './components/badge-screen/badge-screen.component';
import { SharedModule } from '../shared/shared.module';
import { FormBadgesComponent } from './components/form-badges/form-badges.component';


@NgModule({
  declarations: [BadgeScreenComponent, FormBadgesComponent],
  imports: [
    CommonModule,
    BadgeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class BadgeModule { }
