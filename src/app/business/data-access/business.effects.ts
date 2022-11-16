import * as BusinessActions from './business.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { BusinessService } from './business.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class BusinessEffects {
  loadProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BusinessActions.loadBusiness),
      mergeMap((action) => {
        return this.businessService.getBusiness(action.id).pipe(
          map((business) => {
            return BusinessActions.addBusiness({ business: business });
          })
        );
      })
    );
  });
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BusinessActions.loadBusinesses),
      mergeMap(() => {
        return this.businessService.getBusinesses().pipe(
          map((businesses) => {
            return BusinessActions.addBusinesses({ businesses: businesses });
          })
        );
      })
    );
  });
  insertProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BusinessActions.insertBusiness),
      mergeMap((action) => {
        return this.businessService.insertBusiness(action.business).pipe(
          map((response) => {
            this.redirect();
            const clonedBusiness = { ...action.business, id: response.name };
            return BusinessActions.insertBusinessSuccess({ business: clonedBusiness });
          }),
          catchError(() => of(BusinessActions.insertBusinessFailed({ business: action.business })))
        );
      })
    );
  });
  updateProduct$ = this.actions$.pipe(
    ofType(BusinessActions.updateBusiness),
    mergeMap((action) => {
      return this.businessService.updateBusiness(action.business).pipe(
        map(() => {
          this.redirect();
          return BusinessActions.updateBusinessSuccess({ business: action.business });
        }),
        catchError(() => of(BusinessActions.updateBusinessFailed({ business: action.business })))
      );
    })
  );
  deleteProduct$ = this.actions$.pipe(
    ofType(BusinessActions.deleteBusiness),
    mergeMap((action) => {
      return this.businessService.deleteBusiness(action.id).pipe(
        map(() => {
          this.redirect();
          return BusinessActions.deleteBusinessSuccess({ id: action.id });
        }),
        catchError(() => of(BusinessActions.deleteBusinessFailed({ id: action.id })))
      );
    })
  );

  private redirect() {
    this._router.navigate(['businesses', 'my']);
  }

  constructor(
    private actions$: Actions,
    private businessService: BusinessService,
    private _router: Router
  ) {}
}
