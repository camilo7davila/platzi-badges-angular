import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeListScreenComponent } from './components/badge-list-screen/badge-list-screen.component';

const routes: Routes = [
  {
    path: '',
    component: BadgeListScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgeListRoutingModule { }
