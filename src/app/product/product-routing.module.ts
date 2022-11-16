import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
  },
  {
    path: ':productId',
    loadComponent: () =>
      import('./feature/product/product.component').then((c) => c.ProductComponent),
  },
  {
    path: ':productId/edit',
    loadComponent: () =>
      import('./feature/edit-product/edit-product.component').then((c) => c.EditProductComponent),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
