import { TChain } from '../settingsApi/settingsApi.types';

export type TFloorChart = {
  time: string;
  price: number;
};

export type TCollection = {
  collection: string;
  floor_price: number;
  currency: string;
  percentage_change: number;
  top_offer: number;
  sales_24h: number;
  owners: number;
  listed: number;
  volume: number;
  floor_chart: TFloorChart[];
  favorite: boolean;
  icon: string;
  chain: TChain;
  verified: boolean;
  id: number;
  holding: boolean;
};

export type TCollections = TCollection[];
