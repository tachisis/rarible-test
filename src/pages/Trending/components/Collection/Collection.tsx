import { FC } from 'react';
import { TCollectionProps } from './Collection.types';
import { Avatar } from '../../../../components/Avatar/Avatar';
import Verified from '@/assets/icons/Verified';
import { WatchlistButton } from '../../../../components/WatchlistButton/WatchlistButton';

export const Collection: FC<TCollectionProps> = ({ collection }) => {
  const { collection: name, chain, icon, verified, favorite, id } = collection;

  return (
    <div className="flex gap-2 items-center">
      <div className="pl-2 [&_button]:block">
        <WatchlistButton selected={favorite} collectionId={id} />
      </div>
      <Avatar icon={icon} chain={chain} name={name} size={32} />
      <div className="whitespace-nowrap">
        {name}
        {verified && (
          <Verified size={16} className="ml-[2px] inline align-top" />
        )}
      </div>
    </div>
  );
};
