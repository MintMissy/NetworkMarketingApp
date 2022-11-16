import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subject, take } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { loadBusinessman } from '../data-access/businessman.actions';
import { selectBusinessmanEntity } from '../data-access/businessman.selectors';

@Injectable({
  providedIn: 'root',
})
export class BusinessmanIdResolver implements Resolve<boolean> {
  constructor(private _store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const businessmanId = route.paramMap.get('id');
    if (businessmanId == null) {
      return of(false);
    }

    const resolveResultSubject = new Subject<boolean>();

    this._store
      .select(selectBusinessmanEntity(businessmanId))
      .pipe(take(1))
      .subscribe((businessman) => {
        if (businessman !== undefined) {
          resolveResultSubject.next(false);
          return;
        }
        this._store.dispatch(loadBusinessman({ id: businessmanId }));
        resolveResultSubject.next(true);
      });

    return resolveResultSubject.asObservable();
  }
}
