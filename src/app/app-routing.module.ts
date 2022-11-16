import { RouterModule, Routes } from '@angular/router';

import { CreditsComponent } from './credits/feature/credits/credits.component';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { NotAuthGuard } from './auth/guards/not-auth.guard';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'businesses',
    loadChildren: () =>
      import('./business/business-routing.module').then((m) => m.BusinessRoutingModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
    canActivate: [NotAuthGuard]
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
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
