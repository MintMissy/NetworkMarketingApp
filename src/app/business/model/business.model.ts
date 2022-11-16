import { BusinessType } from 'src/app/business/model/business-type.enum';
import { Address } from 'src/app/core/model/address.model';
import { ContactDetails } from 'src/app/core/model/contact-details.model';

export interface Business {
  id?: string;
  parentBusinessId: string | null;
  ownerId: string;
  shopIds: string[];
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
