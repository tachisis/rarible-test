export type TChain =
  | 'Ethereum'
  | 'Ton'
  | 'Polygon'
  | 'Aptos'
  | 'Base'
  | 'Celo'
  | 'Kroma'
  | 'Arbitrum'
  | 'Moonbeam'
  | 'Palm'
  | 'Lisk'
  | 'Rari'
  | 'Immutablex'
  | 'Xai'
  | 'Mantle'
  | 'Sei'
  | 'Bera'
  | 'Monad';

export type TUser = {
  name: string;
  account: string;
  chain: TChain;
};

export type TOption = {
  label: string;
  value: string;
};

export type TSettings = {
  user: TUser;
  search_options: TOption[];
  chains_options: TOption[];
  timeframe_options: TOption[];
};
