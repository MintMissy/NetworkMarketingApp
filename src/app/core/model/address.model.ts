import { Country } from './country.enum';

export interface Address {
  country: Country;
  city: string;
  street: string;
  localNumber: string;
  postalCode: string;
}
