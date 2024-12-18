import { TCollection } from '@/api/collectionsApi/collectionsApi.types';

export type TListedProps = {
  listed: TCollection['listed'];
  currency: TCollection['currency'];
};
