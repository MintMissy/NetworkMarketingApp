import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  getProduct(id: string): Observable<Product> {
    return this._httpClient.get<Product>(environment.endpointUrl + `products/${id}`);
  }

  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(environment.endpointUrl + 'products.json');
  }

  insertProduct(product: Product) {
    return this._httpClient.post(environment.endpointUrl + 'products.json', product);
  }

  updateProduct(product: Product) {
    return this._httpClient.put(environment.endpointUrl + `products/${product.id}`, product);
  }

  deleteProduct(id: string) {
    return this._httpClient.delete(environment.endpointUrl + `products/${id}`);
  }
}
