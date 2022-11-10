export interface BusinessOwner {
  id: number;
  name: string;
  telephone: number;
  city: string;
  street: string;
  localNumber: string;
  country: string;
  postcode: string;
  ownedBusinessesIds: number[];
}
