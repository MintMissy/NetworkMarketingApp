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
          import('./feature/business-owners/business-owners.component').then(
            (c) => c.BusinessOwnersComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./feature/businessman/businessman.component').then((c) => c.BusinessmanComponent),
      },
      {
        path: ':id/edit',
        loadComponent: () =>
          import('./feature/edit-business-owner/edit-business-owner.component').then(
            (c) => c.EditBusinessOwnerComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessOwnerRoutingModule {}
