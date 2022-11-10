import { Product } from 'src/app/product/model/product.model';

export interface Store {
  id: number;
  ownerId: number;
  name: string;
  products: Product[];
}
