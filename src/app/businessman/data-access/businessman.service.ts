import { Businessman } from '../model/businessman.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessmanService {
  constructor(private _httpClient: HttpClient) {}

  getBusinessman(id: string): Observable<Businessman> {
    return this._httpClient.get<Businessman>(environment.endpointUrl + `businessmen/${id}`);
  }

  getBusinessmen(): Observable<Businessman[]> {
    return this._httpClient.get<Businessman[]>(environment.endpointUrl + 'businessmen.json');
  }

  insertBusinessman(businessman: Businessman) {
    return this._httpClient.post(environment.endpointUrl + 'businessmen.json', businessman);
  }

  updateBusinessman(businessman: Businessman) {
    return this._httpClient.put(environment.endpointUrl + `businessmen/${businessman.id}`, businessman);
  }

  deleteBusinessman(id: string) {
    return this._httpClient.delete(environment.endpointUrl + `businessmen/${id}`);
  }
}
