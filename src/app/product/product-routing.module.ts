import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { ExistingProductGuard } from './guard/existing-product.guard';
import { NgModule } from '@angular/core';
import { OwnedShopGuard } from '../shop/guard/owned-shop.guard';

const routes: Routes = [
  {
    path: 'new',
    loadComponent: () =>
      import('./feature/add-product/add-product.component').then((c) => c.AddProductComponent),
    canActivate: [AuthGuard, OwnedShopGuard],
  },
  {
    path: ':productId',
    canActivate: [ExistingProductGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./feature/product/product.component').then((c) => c.ProductComponent),
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./feature/edit-product/edit-product.component').then(
            (c) => c.EditProductComponent
          ),
        canActivate: [AuthGuard, OwnedShopGuard],
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
