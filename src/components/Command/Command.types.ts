import { TOption } from '@/api/settingsApi/settingsApi.types';

export type TSearchProps = {
  options: TOption[];
  className?: string;
  isLoading: boolean;
};
