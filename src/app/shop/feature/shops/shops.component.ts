import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/product/data-access/product.service';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct('1').subscribe((product) => {
      console.log(product);
    });
  }
}
