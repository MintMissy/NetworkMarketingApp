import { RouterModule, Routes } from '@angular/router';

import { ExistingBusinessmanGuard } from './guard/existing-businessman.guard';
import { NgModule } from '@angular/core';
import { UserProfileGuard } from './guard/user-profile.guard';

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
        canActivate: [ExistingBusinessmanGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('./feature/businessman/businessman.component').then(
                (c) => c.BusinessmanComponent
              ),
          },
          {
            path: 'edit',
            loadComponent: () =>
              import('./feature/edit-businessman/edit-businessman.component').then(
                (c) => c.EditBusinessManComponent
              ),
            canActivate: [UserProfileGuard],
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
export class BusinessmanRoutingModule {}
