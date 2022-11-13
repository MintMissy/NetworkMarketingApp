import { Injectable } from '@angular/core';
import { Shop } from '../model/store.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor() {}

  getShop(id: string) {}

  getShops() {}

  addShop(shop: Shop) {}

  updateShop(shop: Shop) {}
}
