import { TCollection } from '@/api/collectionsApi/collectionsApi.types';

export type TFloor24hProps = {
  floorPrice: TCollection['floor_price'];
  currency: TCollection['currency'];
};
