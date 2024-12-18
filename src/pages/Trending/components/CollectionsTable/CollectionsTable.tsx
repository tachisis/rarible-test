import { DataTable } from '@/components/DataTable/DataTable';
import { useGetCollectionsQuery } from '@/api/collectionsApi/collectionsApi';
import { FC, useMemo } from 'react';
import { TCollectionsTableProps } from './CollectionsTable.types';
import { getColumns } from './columns';

export const CollectionsTable: FC<TCollectionsTableProps> = ({ type }) => {
  const memoizedParams = useMemo(() => ({ type }), [type]);

  const { data, isLoading } = useGetCollectionsQuery(memoizedParams);

  const columns = getColumns(isLoading);

  const columnVisibility = Object.fromEntries(
    columns.map((column) => [column.id, !column.meta?.hidden])
  );

  return (
    <DataTable
      columns={columns}
      data={data || []}
      columnVisibility={columnVisibility}
    />
  );
};
