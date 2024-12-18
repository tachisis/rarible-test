import { collectionTypes } from '../../Trending.constants';

export type TFiltersProps = {
  className?: string;
  onTypeChange: (type: collectionTypes) => void;
};
