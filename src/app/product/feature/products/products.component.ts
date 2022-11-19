import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AddItemCardComponent } from 'src/app/core/components/cards/add-item-card/add-item-card.component';
import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { ProductsListComponent } from '../../ui/products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '@angular/fire/auth';
import { deleteProduct } from '../../data-access/product.actions';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductsListComponent, AddItemCardComponent, MatDialogModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  userData$!: Observable<User | null>;

  constructor(private _store: Store<AppState>, private _authService: AuthenticationService, private _dialog: MatDialog) {
    this.userData$ = this._authService.userData$;
    // TODO products state
    // this.store.load
    // this.products$ = this._store.select(selectProduct)
  }

  // TODO method implementation in children
  deleteClick(product: Product) {
    const openedDialog = this._dialog.open(ConfirmDialogComponent);
    openedDialog.afterClosed().subscribe((result) => {
      if (result) {
        this._store.dispatch(deleteProduct({ id: product.id }));
      }
    });
  }

  ngOnInit(): void {}
}
