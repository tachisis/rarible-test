import { FC } from 'react';

import DefaultProfileIcon from '../../assets/images/User.png';
import { TAvatarProps } from './Avatar.types';
import { ChainIcon } from '../ChainIcon/ChainIcon';

export const Avatar: FC<TAvatarProps> = ({
  name,
  icon,
  chain,
  size = 24,
  rounded,
}) => {
  return (
    <div className="relative" style={{ width: size }}>
      <img
        src={icon ? icon : DefaultProfileIcon}
        alt={name}
        className="overflow-hidden text-xs"
        style={{ width: size, borderRadius: rounded ? '50%' : '4px' }}
      />
      {chain && (
        <div className="absolute bottom-[-4px] right-[-4px] border-2 rounded-full border-black bg-black">
          <ChainIcon
            name={chain}
            size={10}
            style={{ width: '10px', height: '10px' }}
          />
        </div>
      )}
    </div>
  );
};
