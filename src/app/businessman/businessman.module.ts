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
          import('./feature/businessmen/businessmen.component').then((c) => c.BusinessMenComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./feature/businessman/businessman.component').then((c) => c.BusinessmanComponent),
      },
      {
        path: ':id/edit',
        loadComponent: () =>
          import('./feature/edit-businessman/edit-businessman.component').then(
            (c) => c.EditBusinessManComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessManRoutingModule {}
