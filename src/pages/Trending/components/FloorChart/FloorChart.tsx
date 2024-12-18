import { Line, LineChart } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { FC } from 'react';
import { TFloorChartProps } from './FloorChart.types';

const chartConfig = {
  price: {
    label: 'Price',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export const FloorChart: FC<TFloorChartProps> = ({ chartData, change }) => {
  const lineColor = change >= 0 ? '#28b833' : '#e11d48';

  return (
    <ChartContainer config={chartConfig} className="w-[80px]">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="price"
          type="natural"
          stroke={lineColor}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};
