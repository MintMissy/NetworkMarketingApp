import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { ProductsListComponent } from '../../ui/products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductsListComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private _store: Store<AppState>) {
    // this.products$ = this._store.select()
  }

  ngOnInit(): void {}
}
