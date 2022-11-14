import { Address } from 'src/app/core/models/address.model';
import { ContactDetails } from 'src/app/core/models/contact-details.model';

export interface Businessman {
  id?: string;
  details: PersonDetails;
  contactDetails: ContactDetails;
  address: Address;
  ownedBusinesses: string[];
}

export interface PersonDetails {
  firstName: string;
  surname: string;
  avatar: string;
}
