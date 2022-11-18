import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AddItemCardComponent } from 'src/app/core/components/cards/add-item-card/add-item-card.component';
import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { ProductsListComponent } from '../../ui/products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductsListComponent, AddItemCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  userData$!: Observable<User | null>;

  constructor(private _store: Store<AppState>, private _authService: AuthenticationService) {
    this.userData$ = this._authService.userData$;
    // TODO products state
    // this.store.load
    // this.products$ = this._store.select(selectProduct)
  }

  ngOnInit(): void {}
}
