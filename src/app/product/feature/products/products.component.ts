import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CardComponent } from 'src/app/core/components/card/card.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products!: Observable<Product[]>

  constructor() {}

  ngOnInit(): void {}
}
