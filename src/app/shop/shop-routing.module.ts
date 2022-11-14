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
          import('./feature/shops/shops.component').then((c) => c.ShopsComponent),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./feature/add-shop/add-shop.component').then((c) => c.AddShopComponent),
      },
      {
        path: ':shopId',
        loadComponent: () => import('./feature/shop/shop.component').then((c) => c.ShopComponent),
      },
      {
        path: ':shopId/edit',
        loadComponent: () =>
          import('./feature/edit-shop/edit-shop.component').then((c) => c.EditShopComponent),
      },
      {
        path: ':shopId/products',
        loadComponent: () =>
          import('./feature/products/products.component').then((c) => c.ProductsComponent),
      },
      {
        path: ':shopId/products/:productId',
        loadComponent: () =>
          import('./feature/product/product.component').then((c) => c.ProductComponent),
      },
      {
        path: ':shopId/products/:productId/edit',
        loadComponent: () =>
          import('./feature/edit-product/edit-product.component').then(
            (c) => c.EditProductComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
