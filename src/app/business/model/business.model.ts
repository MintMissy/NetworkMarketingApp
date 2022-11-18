import { Address } from 'src/app/core/model/address.model';
import { BusinessIndustry } from 'src/app/business/model/business-industry.enum';
import { ContactDetails } from 'src/app/core/model/contact-details.model';

export interface Business {
  id: string;
  ownerId: string;
  shopIds: string[];
  details: BusinessDetails;
  address: Address;
  contactDetails: ContactDetails;
}

export interface BusinessDetails {
  companyName: string;
  description: string;
  industry: BusinessIndustry;
  ownerId: string;
  backgroundImage: string;
  parentBusinessId: string | null;
}
