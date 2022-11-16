import * as BusinessmanActions from './businessman.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { BusinessmanService } from './businessman.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BusinessmanEffects {
  loadBusinessman$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BusinessmanActions.loadBusinessman),
      mergeMap((action) => {
        return this.businessmanService.getBusinessman(action.id).pipe(
          map((businessman) => {
            return BusinessmanActions.addBusinessman({ businessman: businessman });
          })
        );
      })
    );
  });
  loadBusinessmen$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BusinessmanActions.loadBusinessmen),
      mergeMap(() => {
        return this.businessmanService.getBusinessmen().pipe(
          map((businessmen) => {
            return BusinessmanActions.addBusinessmen({ businessmen: businessmen });
          })
        );
      })
    );
  });
  insertBusinessman$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BusinessmanActions.insertBusinessman),
      mergeMap((action) => {
        return this.businessmanService.insertBusinessman(action.businessman).pipe(
          map(() => {
            this.redirect();
            return BusinessmanActions.insertBusinessmanSuccess({ businessman: action.businessman });
          }),
          catchError(() =>
            of(BusinessmanActions.insertBusinessmanFailed({ businessman: action.businessman }))
          )
        );
      })
    );
  });
  updateBusinessman$ = this.actions$.pipe(
    ofType(BusinessmanActions.updateBusinessman),
    mergeMap((action) => {
      return this.businessmanService.updateBusinessman(action.businessman).pipe(
        map(() => {
          this.redirect();
          return BusinessmanActions.updateBusinessmanSuccess({ businessman: action.businessman });
        }),
        catchError(() =>
          of(BusinessmanActions.updateBusinessmanFailed({ businessman: action.businessman }))
        )
      );
    })
  );
  deleteBusinessman$ = this.actions$.pipe(
    ofType(BusinessmanActions.deleteBusinessman),
    mergeMap((action) => {
      return this.businessmanService.deleteBusinessman(action.id).pipe(
        map(() => {
          this.redirect();
          return BusinessmanActions.deleteBusinessmanSuccess({ id: action.id });
        }),
        catchError(() => of(BusinessmanActions.deleteBusinessmanFailed({ id: action.id })))
      );
    })
  );

  private redirect() {
    this._router.navigate(['businesses', 'my']);
  }

  constructor(
    private actions$: Actions,
    private businessmanService: BusinessmanService,
    private _router: Router
  ) {}
}
