import { TCollection } from '@/api/collectionsApi/collectionsApi.types';

export type TVolumeProps = {
  volume: TCollection['volume'];
  currency: TCollection['currency'];
};
