import { TCollection } from '@/api/collectionsApi/collectionsApi.types';
import { Collection } from '@/pages/Trending/components/Collection/Collection';
import { ColumnDef } from '@tanstack/react-table';
import { FloorChart } from '../FloorChart/FloorChart';
import { SortingHeader } from '@/components/DataTable/components/SortingHeader/SortingHeader';
import { Floor24h } from '../Floor24h/Floor24h';
import { Change } from '../Change/Change';
import { Price } from '../Price/Price';
import { Listed } from '../Listed/Listed';
import { Volume } from '../Volume/Volume';
import { Skeleton } from '@/components/ui/skeleton';

export type ExtendedColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
  meta?: {
    hidden?: boolean;
  };
};

export const getColumns = (
  isLoading: boolean
): ExtendedColumnDef<TCollection, unknown>[] => [
  {
    accessorKey: 'currency',
    id: 'currency',
    meta: { hidden: true },
  },
  {
    accessorKey: 'id',
    id: 'id',
    meta: { hidden: true },
  },
  {
    accessorKey: 'holding',
    id: 'holding',
    meta: { hidden: true },
  },
  {
    accessorKey: 'collection',
    id: 'collection',
    header: () => {
      return (
        <div className="w-[250px] sm:pl-3 uppercase text-[10px]">
          Collection
        </div>
      );
    },
    cell: ({ row }) => {
      const collection = row.original;

      return isLoading ? (
        <div className="flex items-center gap-2 pl-2">
          <Skeleton className="h-[10px] w-[10px] bg-white/[0.2] rounded-none flex-shrink-0" />
          <Skeleton className="h-8 w-8 bg-white/[0.2] rounded-none flex-shrink-0" />
          <Skeleton className="h-4 w-full bg-white/[0.2] rounded-none" />
        </div>
      ) : (
        <Collection collection={collection} />
      );
    },
  },
  {
    accessorKey: 'floor_price',
    id: 'floor_price',
    header: ({ column }) => {
      return (
        <SortingHeader
          column={column}
          text={'Floor 24h'}
          className="justify-end"
        />
      );
    },
    cell: ({ row }) => {
      const floorPrice: TCollection['floor_price'] =
        row.getValue('floor_price');
      const currency: TCollection['currency'] = row.getValue('currency');

      return isLoading ? (
        <Skeleton className="h-4 w-full bg-white/[0.2] rounded-none" />
      ) : (
        <Floor24h floorPrice={floorPrice} currency={currency} />
      );
    },
  },
  {
    accessorKey: 'percentage_change',
    id: 'percentage_change',
    header: ({ column }) => {
      return (
        <SortingHeader
          column={column}
          text={'Fl. CH 24h'}
          className="justify-end"
        />
      );
    },
    cell: ({ row }) => {
      const changeValue: TCollection['percentage_change'] =
        row.getValue('percentage_change');

      return isLoading ? (
        <Skeleton className="h-4 w-full bg-white/[0.2] rounded-none" />
      ) : (
        <Change value={changeValue} />
      );
    },
  },
  {
    accessorKey: 'top_offer',
    id: 'top_offer',
    header: ({ column }) => {
      return (
        <SortingHeader
          column={column}
          text={'Top Offer'}
          className="justify-end"
        />
      );
    },
    cell: ({ row }) => {
      const topOffer: TCollection['top_offer'] = row.getValue('top_offer');
      const currency: TCollection['currency'] = row.getValue('currency');

      return isLoading ? (
        <Skeleton className="h-4 w-full bg-white/[0.2] rounded-none" />
      ) : (
        <Price value={topOffer} currency={currency} />
      );
    },
  },
  {
    accessorKey: 'sales_24h',
    id: 'sales_24h',
    header: ({ column }) => {
      return (
        <SortingHeader
          column={column}
          text={'Sales 24h'}
          className="justify-end"
        />
      );
    },
    cell: ({ row }) => {
      const sales24h: TCollection['sales_24h'] = row.getValue('sales_24h');

      return isLoading ? (
        <Skeleton className="h-4 w-full bg-white/[0.2] rounded-none" />
      ) : (
        <div className="text-sm text-right">{sales24h}</div>
      );
    },
  },
  {
    accessorKey: 'owners',
    id: 'owners',
    header: ({ column }) => {
      return (
        <SortingHeader
          column={column}
          text={'Owners'}
          className="justify-end"
        />
      );
    },
    cell: ({ row }) => {
      const owners: TCollection['owners'] = row.getValue('owners');

      return isLoading ? (
        <Skeleton className="h-4 w-full bg-white/[0.2] rounded-none" />
      ) : (
        <div className="text-sm text-right">{owners}</div>
      );
    },
  },
  {
    accessorKey: 'listed',
    id: 'listed',
    header: ({ column }) => {
      return (
        <SortingHeader
          column={column}
          text={'Listed'}
          className="justify-end"
        />
      );
    },
    cell: ({ row }) => {
      const listed: TCollection['listed'] = row.getValue('listed');
      const currency: TCollection['currency'] = row.getValue('currency');

      return isLoading ? (
        <Skeleton className="h-4 w-full bg-white/[0.2] rounded-none" />
      ) : (
        <Listed listed={listed} currency={currency} />
      );
    },
  },
  {
    accessorKey: 'volume',
    id: 'volume',
    header: ({ column }) => {
      return (
        <SortingHeader
          column={column}
          text={'Volume 24h'}
          className="justify-end"
        />
      );
    },
    cell: ({ row }) => {
      const volume: TCollection['volume'] = row.getValue('volume');
      const currency: TCollection['currency'] = row.getValue('currency');

      return isLoading ? (
        <Skeleton className="h-4 w-full bg-white/[0.2] rounded-none" />
      ) : (
        <Volume volume={volume} currency={currency} />
      );
    },
  },
  {
    accessorKey: 'floor_chart',
    id: 'floor_chart',
    header: () => {
      return <div className="uppercase text-right text-[10px]">Floor 24h</div>;
    },
    cell: ({ row }) => {
      const chartData: TCollection['floor_chart'] = row.getValue('floor_chart');
      const change: TCollection['percentage_change'] =
        row.getValue('percentage_change');

      return isLoading ? (
        <Skeleton className="h-4 w-full bg-white/[0.2] rounded-none" />
      ) : (
        <div className="flex justify-end">
          <FloorChart chartData={chartData} change={change} />
        </div>
      );
    },
  },
];
