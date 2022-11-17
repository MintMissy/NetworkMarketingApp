import { Observable, map } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Business } from '../model/business.model';
import { FirebasePostResponse } from 'src/app/core/model/firebase-post-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { databaseGetObjectsAdapter } from 'src/app/core/util/get-list-utils';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  constructor(private _httpClient: HttpClient, private _database: AngularFirestore) {}

  getBusinesses(): Observable<Business[]> {
    return this._httpClient
      .get<{ [id: string]: Business }>(environment.endpointUrl + 'businesses.json')
      .pipe(map((businesses) => databaseGetObjectsAdapter(businesses)));
  }

  insertBusiness(business: Business) {
    return this._httpClient.post<FirebasePostResponse>(
      environment.endpointUrl + 'businesses.json',
      business
    );
  }

  updateBusiness(business: Business) {
    return this._httpClient.put(
      environment.endpointUrl + `businesses/${business.id}.json`,
      business
    );
  }

  deleteBusiness(id: string) {
    return this._httpClient.delete(environment.endpointUrl + `businesses/${id}.json`);
  }
}
