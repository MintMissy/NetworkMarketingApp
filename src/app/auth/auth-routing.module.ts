import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then((c) => c.LoginComponent),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./components/sign-up/sign-up.component').then((c) => c.SignUpComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
