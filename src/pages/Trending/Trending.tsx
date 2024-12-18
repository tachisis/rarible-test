import { CollectionsTable } from './components/CollectionsTable/CollectionsTable';
import { ChainsSelector } from '@/components/ChainsSelector/ChainsSelector';
import { Timeframe } from '@/components/Timeframe/Timeframe';
import { Filters } from './components/Filters/Filters';
import { useState } from 'react';
import { collectionTypes, DEFAULT_COLLECTION_TYPE } from './Trending.constants';

export const Trending = () => {
  const [collectionType, setCollectionType] = useState(DEFAULT_COLLECTION_TYPE);

  const handleTypeChange = (type: collectionTypes) => {
    setCollectionType(type);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center sm:pl-4 sm:pr-2 pb-5">
        <Filters className="pb-4 sm:pb-0" onTypeChange={handleTypeChange} />
        <div className="flex items-center gap-2">
          <ChainsSelector />
          <div className="hidden sm:block">
            <Timeframe variant="desktop" />
          </div>
          <div className="sm:hidden">
            <Timeframe variant="mobile" />
          </div>
        </div>
      </div>
      <CollectionsTable type={collectionType} />
    </>
  );
};
