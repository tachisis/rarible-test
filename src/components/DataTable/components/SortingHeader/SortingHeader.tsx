import { TSortingHeaderProps } from './SortingHeader.types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp } from 'lucide-react';

export const SortingHeader = <TData,>({
  column,
  text,
  className,
}: TSortingHeaderProps<TData>) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      className={cn(
        'p-0 text-[10px] uppercase w-full justify-start hover:bg-transparent hover:text-white/[0.4]',
        column.getIsSorted() ? 'text-white hover:text-white' : '',
        className
      )}
    >
      <div className="w-4">
        {column.getIsSorted() === 'asc' && <ArrowUp className="h-4 w-4" />}
        {column.getIsSorted() === 'desc' && <ArrowDown className="h-4 w-4" />}
      </div>
      {text}
    </Button>
  );
};
