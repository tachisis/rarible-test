import Star from '@/assets/icons/Star';
import { Button } from '../ui/button';
import { FC, useState } from 'react';
import { TWatchlistButtonProps } from './WatchlistButton.types';
import { cn } from '@/lib/utils';

export const WatchlistButton: FC<TWatchlistButtonProps> = ({
  selected = false,
  collectionId,
}) => {
  const [isSelected, setIsSelected] = useState(selected);

  const dynamicClass = isSelected
    ? 'text-brandYellow opacity-100 hover:text-brandYellow'
    : 'opacity-40 hover:text-white';

  const onToggle = () => {
    setIsSelected((prev) => !prev);
    console.log('Made some request to server with collectionId:', collectionId);
  };

  return (
    <Button
      type="button"
      variant={'ghost'}
      onClick={onToggle}
      className={cn(
        'w-5 h-5 p-0 justify-center text-white hover:bg-transparent',
        dynamicClass
      )}
    >
      <Star size={20} style={{ width: '20px', height: '20px' }} />
    </Button>
  );
};
