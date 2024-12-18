import { FC } from 'react';
import { TVolumeProps } from './Volume.types';
import { formatPrice } from '@/helpers/formatPrice';

export const Volume: FC<TVolumeProps> = ({ volume, currency }) => {
  // Mock calculation
  const ETH_PRICE = 3000;

  const fiatPrice = formatPrice(volume * ETH_PRICE);

  return (
    <div className="text-sm text-right">
      <p>
        {formatPrice(volume)}{' '}
        <span className="text-white/[0.4]">{currency}</span>
      </p>
      <p className="text-[10px] text-white/[0.4]">${fiatPrice}</p>
    </div>
  );
};
