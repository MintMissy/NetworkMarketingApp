import { RouterModule, Routes } from '@angular/router';

import { CreditsComponent } from './credits/feature/credits/credits.component';
import { HomeComponent } from './core/components/home/home.component';
import { LanguageConfigurationComponent } from './configuration/feature/language-configuration/language-configuration.component';
import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'businesses',
    loadComponent: () =>
      import('./business/feature/businesses/businesses.component').then(
        (c) => c.BusinessesComponent
      ),
  },
  {
    path: 'owners',
    loadComponent: () =>
      import('./business-owner/feature/business-owners/business-owners.component').then(
        (c) => c.BusinessOwnersComponent
      ),
  },
  {
    path: 'shops',
    loadComponent: () =>
      import('./shop/feature/shops/shops.component').then((c) => c.ShopsComponent),
  },
  {
    path: 'products/new',
    loadComponent: () =>
      import('./product/feature/add-product/add-product.component').then(
        (c) => c.AddProductComponent
      ),
  },
  {
    path: 'credits',
    loadComponent: () =>
      import('./credits/feature/credits/credits.component').then((c) => CreditsComponent),
  },
  {
    path: 'configuration/language',
    loadComponent: () =>
      import(
        './configuration/feature/language-configuration/language-configuration.component'
      ).then((c) => LanguageConfigurationComponent),
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
