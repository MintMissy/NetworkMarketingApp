import { Observable, map } from 'rxjs';

import { FirebasePostResponse } from 'src/app/core/model/firebase-post-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { databaseGetObjectsAdapter } from 'src/app/core/util/get-list-utils';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  getProduct(id: string): Observable<Product> {
    return this._httpClient.get<Product>(environment.endpointUrl + `products/${id}`);
  }

  getProducts(): Observable<Product[]> {
    return this._httpClient
      .get<{ [id: string]: Product }>(environment.endpointUrl + 'products.json')
      .pipe(map((product) => databaseGetObjectsAdapter(product)));
  }

  insertProduct(product: Product) {
    return this._httpClient.post<FirebasePostResponse>(
      environment.endpointUrl + 'products.json',
      product
    );
  }

  updateProduct(product: Product) {
    return this._httpClient.put(environment.endpointUrl + `products/${product.id}`, product);
  }

  deleteProduct(id: string) {
    return this._httpClient.delete(environment.endpointUrl + `products/${id}`);
  }
}
