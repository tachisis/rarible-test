import { FC } from 'react';
import { TListedProps } from './Listed.types';
import { formatPrice } from '@/helpers/formatPrice';

export const Listed: FC<TListedProps> = ({ listed, currency }) => {
  // Mock calculation
  const SOME_COEFFICIENT = 3000;
  const SOME_VALUE = '$10k';

  const fiatPrice = formatPrice(listed * SOME_COEFFICIENT);

  return (
    <div className="text-sm text-right">
      <p>
        {listed} <span className="text-white/[0.4]">{currency}</span>
      </p>
      <p className="text-[10px] text-white/[0.4]">
        ${fiatPrice} / {SOME_VALUE}
      </p>
    </div>
  );
};
