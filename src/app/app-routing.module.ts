import { RouterModule, Routes } from '@angular/router';

import { CreditsComponent } from './credits/feature/credits/credits.component';
import { HomeComponent } from './core/components/home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'businesses',
    loadChildren: () =>
      import('./business/business-routing.module').then((m) => m.BusinessRoutingModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: 'businessman',
    loadChildren: () =>
      import('./businessman/businessman-routing.module').then((m) => m.BusinessmanRoutingModule),
  },
  {
    path: 'configuration',
    loadChildren: () =>
      import('./configuration/configuration-routing.module').then(
        (m) => m.ConfigurationRoutingModule
      ),
  },
  {
    path: 'shops',
    loadChildren: () => import('./shop/shop-routing.module').then((m) => m.ShopRoutingModule),
  },
  {
    path: 'credits',
    loadComponent: () =>
      import('./credits/feature/credits/credits.component').then((c) => CreditsComponent),
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
