export interface Shop {
  id: number;
  businessId: number;
  shopDetails: ShopDetails;
  productIds: string[];
}

export interface ShopDetails {
  name: string;
  description: string;
}
