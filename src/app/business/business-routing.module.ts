import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

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
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./feature/business/business.component').then((c) => c.BusinessComponent),
      },
      {
        path: ':id/edit',
        loadComponent: () =>
          import('./feature/edit-business/edit-business.component').then(
            (c) => c.EditBusinessComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
