export interface Shop {
  id: string;
  details: ShopDetails;
  productIds: string[];
}

export interface ShopDetails {
  name: string;
  description: string;
  shopBanner: string;
  businessId: string;
}
