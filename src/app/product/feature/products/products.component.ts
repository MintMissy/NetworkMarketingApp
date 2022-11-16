import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CardComponent } from 'src/app/core/components/card/card.component';
import { Product } from '../../model/product.model';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products!: Observable<Product[]>;

  constructor() {}

  ngOnInit(): void {}
}
