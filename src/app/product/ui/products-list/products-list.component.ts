import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  @Input() products!: Product[] | null;
  @Input() userData!: User | null;

  constructor() {}

  ngOnInit(): void {}
}
