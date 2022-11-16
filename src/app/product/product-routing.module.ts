import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OwnedShopGuard } from '../shop/guard/owned-shop.guard';
import { ExistingProductGuard } from './guard/existing-product.guard';
import { ProductIdResolver } from './resolver/product-id.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./feature/products/products.component').then((c) => c.ProductsComponent),
  },
  {
    path: 'new',
    loadComponent: () =>
      import('./feature/add-product/add-product.component').then((c) => c.AddProductComponent),
    canActivate: [OwnedShopGuard],
  },
  {
    path: ':productId',
    canActivate: [ExistingProductGuard],
    resolve: [ProductIdResolver],
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
        canActivate: [OwnedShopGuard],
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
