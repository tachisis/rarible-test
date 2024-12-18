import { FC } from 'react';
import { TPriceProps } from './Price.types';

export const Price: FC<TPriceProps> = ({ value, currency }) => {
  return (
    <div className="text-sm text-right">
      {value} <span className="text-white/[0.4]">{currency}</span>
    </div>
  );
};
