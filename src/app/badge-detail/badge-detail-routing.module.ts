import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeDetailScreenComponent } from './components/badge-detail-screen/badge-detail-screen.component';

const routes: Routes = [
  {
    path: ':id',
    component: BadgeDetailScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgeDetailRoutingModule { }
