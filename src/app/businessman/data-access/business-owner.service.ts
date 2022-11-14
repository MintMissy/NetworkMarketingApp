import { Businessman } from '../model/businessman.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusinessOwnerService {
  constructor() {}

  getOwner(id: string) {}

  getOwners(id: string) {}

  addOwner(owner: Businessman) {}

  updateOwner(owner: Businessman) {}
}
