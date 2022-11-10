import { BusinessType } from 'src/app/core/enums/business-type.enum';

export interface Business {
  id: number;
  parentBusinessId: number | null;
  companyName: string;
  type: BusinessType;
  ownerId: number;
  storeId: number;
}
