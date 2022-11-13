import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProduct(id: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.endpointUrl + 'products.json');
  }

  getProducts() {}

  addProduct(product: Product) {
    return this.httpClient.post(environment.endpointUrl + 'products.json', product);
  }

  updateProduct(product: Product) {}
}
