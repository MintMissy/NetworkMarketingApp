import { Store } from 'src/app/store/model/store.model';

export interface BusinessOwner {
  id: number;
  mentorId: number | null;
  name: string;
  telephone: number;
  city: string;
  street: string;
  localNumber: string;
  country: string;
  postcode: string;
  ownedStores: Store[];
}
