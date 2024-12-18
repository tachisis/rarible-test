import Ethereum from '@/assets/icons/Ethereum';
import Ton from '@/assets/icons/Ton';
import Arbitrum from '@/assets/icons/Arbitrum';
import Base from '@/assets/icons/Base';
import Bera from '@/assets/icons/Bera';
import Celo from '@/assets/icons/Celo';
import Immutablex from '@/assets/icons/ImmutableX';
import Kroma from '@/assets/icons/Kroma';
import Lisk from '@/assets/icons/Lisk';
import Mantle from '@/assets/icons/Mantle';
import Monad from '@/assets/icons/Monad';
import Moonbeam from '@/assets/icons/Moonbeam';
import Palm from '@/assets/icons/Palm';
import Polygon from '@/assets/icons/Polygon';
import Rari from '@/assets/icons/Rari';
import Sei from '@/assets/icons/Sei';
import Xai from '@/assets/icons/Xai';
import { TChainIconProps } from './ChainIcon.types';
import { FC, SVGProps } from 'react';
import Allchains from '@/assets/icons/AllChains';

const chainIcons = {
  Allchains,
  Ethereum,
  Ton,
  Arbitrum,
  Polygon,
  Base,
  Celo,
  Kroma,
  Moonbeam,
  Palm,
  Lisk,
  Rari,
  Immutablex,
  Xai,
  Sei,
  Bera,
  Monad,
  Mantle,
} as const;

export const ChainIcon: FC<SVGProps<SVGSVGElement> & TChainIconProps> = ({
  name,
  size,
  ...rest
}) => {
  const IconComponent = chainIcons[name as keyof typeof chainIcons];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} {...rest} />;
};
