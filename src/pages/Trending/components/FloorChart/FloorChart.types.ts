import { TCollection } from '@/api/collectionsApi/collectionsApi.types';

export type TFloorChartProps = {
  chartData: TCollection['floor_chart'];
  change: TCollection['percentage_change'];
};
