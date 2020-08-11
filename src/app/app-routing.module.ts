import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'badges',
        loadChildren: () => import('./badge-list/badge-list.module').then(m => m.BadgeListModule)
      },
      {
        path: 'badge',
        loadChildren: () => import('./badge/badge.module').then(m => m.BadgeModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('./badge-detail/badge-detail.module').then(m => m.BadgeDetailModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
