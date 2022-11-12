import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessOwnersComponent } from './business-owner/feature/business-owners/business-owners.component';
import { BusinessesComponent } from './business/feature/businesses/businesses.component';
import { LanguageConfigurationComponent } from './configuration/feature/language-configuration/language-configuration.component';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { CreditsComponent } from './credits/feature/credits/credits.component';
import { ShopsComponent } from './shop/feature/shops/shops.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'businesses', component: BusinessesComponent },
  { path: 'owners', component: BusinessOwnersComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'configuration/language', component: LanguageConfigurationComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
