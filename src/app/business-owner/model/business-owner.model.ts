export interface BusinessOwner {
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

export interface ContactDetails {
  email: string;
  telephone: number;
}

export interface Address {
  street: string;
  localNumber: string;
  postalCode: string;
  country: string;
}
