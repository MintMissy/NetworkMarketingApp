import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subject, take } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { loadBusiness } from '../data-access/business.actions';
import { selectBusinessEntity } from '../data-access/business.selectors';

@Injectable({
  providedIn: 'root',
})
export class BusinessIdResolver implements Resolve<boolean> {
  constructor(private _store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const businessId = route.paramMap.get('id');
    if (businessId == null) {
      return of(false);
    }

    const resolveResultSubject = new Subject<boolean>();

    this._store
      .select(selectBusinessEntity(businessId))
      .pipe(take(1))
      .subscribe((business) => {
        if (business !== undefined) {
          resolveResultSubject.next(false);
          return;
        }
        this._store.dispatch(loadBusiness({ id: businessId }));
        resolveResultSubject.next(true);
      });

    return resolveResultSubject.asObservable();
  }
}
