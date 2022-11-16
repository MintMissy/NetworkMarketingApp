export interface Shop {
  id: String;
  businessId: string;
  details: ShopDetails;
  productIds: string[];
}

export interface ShopDetails {
  name: string;
  description: string;
  shopBanner: string;
}
