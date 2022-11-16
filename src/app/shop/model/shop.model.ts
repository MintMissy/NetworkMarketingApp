export interface Shop {
  id: string;
  businessId: string;
  details: ShopDetails;
  productIds: string[];
}

export interface ShopDetails {
  name: string;
  description: string;
  shopBanner: string;
}
