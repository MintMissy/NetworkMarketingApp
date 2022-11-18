import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/guards/auth.guard';
import { ExistingShopGuard } from './guard/existing-shop.guard';
import { NgModule } from '@angular/core';
import { OwnedShopGuard } from './guard/owned-shop.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./feature/shops/shops.component').then((c) => c.ShopsComponent),
      },
      {
        path: 'my',
        loadComponent: () =>
          import('./feature/my-shops/my-shops.component').then((c) => c.MyShopsComponent),
        canActivate: [AuthGuard],
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./feature/add-shop/add-shop.component').then((c) => c.AddShopComponent),
        canActivate: [AuthGuard],
      },
      {
        path: ':shopId',
        canActivate: [ExistingShopGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('./feature/shop/shop.component').then((c) => c.ShopComponent),
          },
          {
            path: 'edit',
            loadComponent: () =>
              import('./feature/edit-shop/edit-shop.component').then((c) => c.EditShopComponent),
            canActivate: [AuthGuard, OwnedShopGuard],
          },
          {
            path: 'products',
            loadChildren: () =>
              import('../product/product-routing.module').then((m) => m.ProductRoutingModule),
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
export class ShopRoutingModule {}
