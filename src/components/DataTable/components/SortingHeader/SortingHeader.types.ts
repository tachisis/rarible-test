import { Column } from '@tanstack/react-table';

export type TSortingHeaderProps<TData> = {
  column: Column<TData, unknown>;
  text: string;
  className?: string;
};
