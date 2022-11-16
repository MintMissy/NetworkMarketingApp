import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ExistingBusinessGuard } from './guard/existing-business.guard';
import { OwnedBusinessGuard } from './guard/owned-business.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./feature/businesses/businesses.component').then((c) => c.BusinessesComponent),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./feature/add-business/add-business.component').then(
            (c) => c.AddBusinessComponent
          ),
        canActivate: [AuthGuard],
      },
      {
        path: ':id',
        canActivate: [ExistingBusinessGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('./feature/business/business.component').then((c) => c.BusinessComponent),
          },
          {
            path: 'edit',
            loadComponent: () =>
              import('./feature/edit-business/edit-business.component').then(
                (c) => c.EditBusinessComponent
              ),
            canActivate: [AuthGuard, OwnedBusinessGuard],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
