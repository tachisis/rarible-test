import { FC } from 'react';
import { TChangeProps } from './Change.types';
import { cn } from '@/lib/utils';

export const Change: FC<TChangeProps> = ({ value }) => {
  // Mock calculation
  const GROWTH_COEFFICIENT = 10;

  const textColor =
    value >= GROWTH_COEFFICIENT ? 'text-[#28b833]' : 'text-[#e11d48]';

  const arrowColor =
    value >= GROWTH_COEFFICIENT ? 'border-b-[#28b833]' : 'border-t-[#e11d48]';

  const arrowDirection =
    value >= GROWTH_COEFFICIENT ? 'border-b-[4px]' : 'border-t-[4px]';

  return (
    <div
      className={cn(
        'text-sm text-right flex justify-end items-center gap-1',
        textColor
      )}
    >
      <div
        className={cn(
          'w-0 h-0 border-l-[3px] border-r-[3px] border-l-transparent border-r-transparent',
          arrowColor,
          arrowDirection
        )}
      ></div>

      {`${value}%`}
    </div>
  );
};
