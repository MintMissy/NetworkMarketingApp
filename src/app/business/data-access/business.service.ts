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

  getBusiness(id: string): Observable<Business> {
    return this._httpClient.get<Business>(environment.endpointUrl + `businesses/${id}`);
  }

  getBusinesses(): Observable<Business[]> {
    return this._httpClient.get<Business[]>(environment.endpointUrl + 'businesses.json');
  }

  insertBusiness(business: Business) {
    return this._httpClient.post(environment.endpointUrl + 'businesses.json', business);
  }

  updateBusiness(business: Business) {
    return this._httpClient.put(environment.endpointUrl + `businesses/${business.id}`, business);
  }

  deleteBusiness(id: string) {
    return this._httpClient.delete(environment.endpointUrl + `businesses/${id}`);
  }
}
