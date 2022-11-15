export interface Shop {
  id: number;
  businessId: number;
  details: ShopDetails;
  productIds: string[];
}

export interface ShopDetails {
  name: string;
  description: string;
  shopBanner: string;
}
