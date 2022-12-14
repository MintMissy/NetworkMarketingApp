import { Observable, map } from 'rxjs';

import { FirebasePostResponse } from 'src/app/core/model/firebase-post-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shop } from '../model/shop.model';
import { databaseGetObjectsAdapter } from 'src/app/core/util/get-list-utils';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private _httpClient: HttpClient) {}

  getShop(id: string): Observable<Shop> {
    return this._httpClient.get<Shop>(environment.endpointUrl + `shops/${id}.json`).pipe(
      map((shop) => {
        return { ...shop, id: id };
      })
    );
  }

  getShops(): Observable<Shop[]> {
    return this._httpClient
      .get<{ [id: string]: Shop }>(environment.endpointUrl + 'shops.json')
      .pipe(
        map((shops) => (shops !== undefined && shops !== null ? shops : {})),
        map((shop) => databaseGetObjectsAdapter(shop))
      );
  }

  insertShop(shop: Shop) {
    return this._httpClient.post<FirebasePostResponse>(
      environment.endpointUrl + `shops.json`,
      shop
    );
  }

  updateShop(shop: Shop) {
    return this._httpClient.put(environment.endpointUrl + `shops/${shop.id}.json`, shop);
  }

  deleteShop(id: string) {
    return this._httpClient.delete(environment.endpointUrl + `shops/${id}.json`);
  }
}
