import { Injector } from '@angular/core';
import { ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { selectBusinessEntity } from '../data-access/business.selectors';

export abstract class BusinessGuard {
  protected router: Router;
  protected store: Store<AppState>;

  constructor(private injectorObject: Injector) {
    this.router = this.injectorObject.get(Router);
    this.store = <Store<AppState>>this.injectorObject.get(Store);
  }

  protected getSelectedBusiness(paramMap: ParamMap) {
    const businessId = paramMap.get('id');
    if (businessId === null) {
      return of(undefined);
    }

    return this.store.select(selectBusinessEntity(businessId));
  }

  protected redirectToBusinessesPage() {
    this.router.navigate(['businesses']);
  }
}
