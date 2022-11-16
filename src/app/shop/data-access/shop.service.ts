import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from '../model/shop.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private _httpClient: HttpClient) {}

  getShop(id: string): Observable<Shop> {
    return this._httpClient.get<Shop>(environment.endpointUrl + `shops/${id}`);
  }

  getShops(): Observable<Shop[]> {
    return this._httpClient.get<Shop[]>(environment.endpointUrl + 'shops');
  }

  insertShop(shop: Shop) {
    return this._httpClient.post(environment.endpointUrl + `shops/${shop.id}`, shop);
  }

  updateShop(shop: Shop) {
    return this._httpClient.put(environment.endpointUrl + `shops/${shop.id}`, shop);
  }

  deleteShop(id: string) {
    return this._httpClient.delete(environment.endpointUrl + `shops/${id}`);
  }
}
