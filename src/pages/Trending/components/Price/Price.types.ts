import { TCollection } from '@/api/collectionsApi/collectionsApi.types';

export type TPriceProps = {
  value: number;
  currency: TCollection['currency'];
};
