import { Business } from '../model/business.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  constructor(private _httpClient: HttpClient) {}

  getBusiness(id: string) {}

  getBusinesses(): Observable<Business[]> {
    return this._httpClient.get<Business[]>(environment.endpointUrl + 'businesses.json');
  }

  addBusiness(business: Business) {}

  updateBusiness(business: Business) {}
}
