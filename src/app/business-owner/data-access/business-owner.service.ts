import { BusinessOwner } from '../model/business-owner.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusinessOwnerService {
  constructor() {}

  getOwner(id: string) {}

  getOwners(id: string) {}

  addOwner(owner: BusinessOwner) {}

  updateOwner(owner: BusinessOwner) {}
}
