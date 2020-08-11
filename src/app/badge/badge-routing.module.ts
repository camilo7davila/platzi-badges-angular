import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeScreenComponent } from './components/badge-screen/badge-screen.component';

const routes: Routes = [
  {
    path: 'new',
    component: BadgeScreenComponent,
  },
  {
    path: 'new/:id',
    component: BadgeScreenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgeRoutingModule { }
