import { Observable, map } from 'rxjs';

import { Businessman } from '../model/businessman.model';
import { FirebasePostResponse } from 'src/app/core/model/firebase-post-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { databaseGetObjectsAdapter } from 'src/app/core/util/get-list-utils';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BusinessmanService {
  constructor(private _httpClient: HttpClient) {}

  getBusinessman(id: string): Observable<Businessman> {
    return this._httpClient.get<Businessman>(environment.endpointUrl + `businessmen/${id}`);
  }

  getBusinessmen(): Observable<Businessman[]> {
    return this._httpClient
      .get<{ [id: string]: Businessman }>(environment.endpointUrl + 'businessmen.json')
      .pipe(map((businessmen) => databaseGetObjectsAdapter(businessmen)));
  }

  insertBusinessman(businessman: Businessman) {
    return this._httpClient.post<FirebasePostResponse>(
      environment.endpointUrl + 'businessmen.json',
      businessman
    );
  }

  updateBusinessman(businessman: Businessman) {
    return this._httpClient.put(
      environment.endpointUrl + `businessmen/${businessman.id}`,
      businessman
    );
  }

  deleteBusinessman(id: string) {
    return this._httpClient.delete(environment.endpointUrl + `businessmen/${id}`);
  }
}
