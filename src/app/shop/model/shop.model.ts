import { Product } from 'src/app/shop/model/product.model';

export interface Shop {
  id: number;
  businessId: number;
  name: string;
  products: Product[];
}
