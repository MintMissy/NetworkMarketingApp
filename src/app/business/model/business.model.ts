import { Address } from 'src/app/core/models/address.model';
import { BusinessType } from 'src/app/core/enums/business-type.enum';
import { ContactDetails } from 'src/app/core/models/contact-details.model';

export interface Business {
  id?: string;
  parentBusinessId: number | null;
  storeId: number;
  details: BusinessDetails;
  address: Address;
  contactDetails: ContactDetails;
}

export interface BusinessDetails {
  companyName: string;
  type: BusinessType;
  ownerId: number;
  backgroundImage: string;
}
