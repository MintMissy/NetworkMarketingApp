import { Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { selectBusinessmanEntity } from '../data-access/businessman.selectors';

export abstract class BusinessmanGuard {
  protected router: Router;
  protected activeRoute: ActivatedRoute;
  protected store: Store<AppState>;

  constructor(private injectorObject: Injector) {
    this.router = this.injectorObject.get(Router);
    this.activeRoute = this.injectorObject.get(ActivatedRoute);
    this.store = <Store<AppState>>this.injectorObject.get(Store);
  }

  protected getSelectedBusinessman() {
    const businessman = this.activeRoute.snapshot.paramMap.get('id');
    if (businessman === null) {
      return of(undefined);
    }

    return this.store.select(selectBusinessmanEntity(businessman));
  }

  protected redirectToBusinessmanPage() {
    this.router.navigate(['businessman']);
  }
}
