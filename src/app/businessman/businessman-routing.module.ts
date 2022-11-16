import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ExistingBusinessmanGuard } from './guard/existing-businessman.guard';
import { UserProfileGuard } from './guard/user-profile.guard';
import { BusinessmanIdResolver } from './resolver/businessman-id.resolver';

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
        resolve: [BusinessmanIdResolver],
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
