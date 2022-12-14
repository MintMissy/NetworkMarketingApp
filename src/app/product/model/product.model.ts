export interface Product {
  id: string;
  shopId?: string;
  details: ProductDetails;
  saleStatistics: SaleStatistics;
}

export interface ProductDetails {
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface SaleStatistics {
  amountInStorage: number;
  soldAmount: number;
}
