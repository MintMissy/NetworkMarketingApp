import { Business } from '../model/business.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  constructor() {}

  getBusiness(id: string) {}

  getBusinesses() {}

  addBusiness(business: Business) {}

  updateBusiness(business: Business) {}
}
