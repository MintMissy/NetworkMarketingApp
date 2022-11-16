import { Address } from 'src/app/core/models/address.model';
import { BusinessType } from 'src/app/business/model/business-type.enum';
import { ContactDetails } from 'src/app/core/models/contact-details.model';

export interface Business {
  id?: string;
  parentBusinessId: string | null;
  ownerId: string;
  shopId: string[];
  details: BusinessDetails;
  address: Address;
  contactDetails: ContactDetails;
}

export interface BusinessDetails {
  companyName: string;
  description: string;
  type: BusinessType;
  ownerId: string;
  backgroundImage: string;
}
