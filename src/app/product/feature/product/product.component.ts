import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { Store } from '@ngrx/store';
import { User } from '@angular/fire/auth';
import { selectProductEntity } from '../../data-access/product.selectors';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  product$!: Observable<Product>;
  selectedId!: string;
  loggedInUser$!: Observable<User | null>;

  constructor(
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loggedInUser$ = this._authService.userData$.asObservable();

    this.selectedId = this._activatedRoute.snapshot.paramMap.get('productId')!;
    // @ts-ignore
    this.product$ = this._store.select(selectProductEntity(this.selectedId));
  }
}
