import { TFiltersProps } from './Filters.types';
import { FC, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  collectionTypes,
  DEFAULT_COLLECTION_TYPE,
} from '../../Trending.constants';

export const Filters: FC<TFiltersProps> = ({ className, onTypeChange }) => {
  const [activeType, setActiveType] = useState(DEFAULT_COLLECTION_TYPE);

  const handleTypeChange = (type: collectionTypes) => {
    setActiveType(type);
    onTypeChange(type);
  };

  return (
    <nav className={cn('', className)}>
      <ul className="flex space-x-4 text-xl">
        <li>
          <button
            onClick={() => handleTypeChange(collectionTypes.TRENDING)}
            className={cn(
              'text-white/[0.4] hover:underline',
              activeType === collectionTypes.TRENDING && 'text-white'
            )}
          >
            {collectionTypes.TRENDING.charAt(0).toUpperCase() +
              collectionTypes.TRENDING.slice(1)}
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTypeChange(collectionTypes.WATCHLIST)}
            className={cn(
              'text-white/[0.4] hover:underline',
              activeType === collectionTypes.WATCHLIST && 'text-white'
            )}
          >
            {collectionTypes.WATCHLIST.charAt(0).toUpperCase() +
              collectionTypes.WATCHLIST.slice(1)}
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTypeChange(collectionTypes.HOLDING)}
            className={cn(
              'text-white/[0.4] hover:underline',
              activeType === collectionTypes.HOLDING && 'text-white'
            )}
          >
            {collectionTypes.HOLDING.charAt(0).toUpperCase() +
              collectionTypes.HOLDING.slice(1)}
          </button>
        </li>
      </ul>
    </nav>
  );
};
