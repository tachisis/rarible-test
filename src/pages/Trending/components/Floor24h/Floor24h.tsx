import { FC } from 'react';
import { TFloor24hProps } from './Floor24h.types';
import { formatPrice } from '@/helpers/formatPrice';

export const Floor24h: FC<TFloor24hProps> = ({ floorPrice, currency }) => {
  // Mock calculation
  const ETH_PRICE = 3000;

  const fiatPrice = formatPrice(floorPrice * ETH_PRICE);

  return (
    <div className="text-sm text-right">
      <p>
        {floorPrice} <span className="text-white/[0.4]">{currency}</span>
      </p>
      <p className="text-[10px] text-white/[0.4]">${fiatPrice}</p>
    </div>
  );
};
