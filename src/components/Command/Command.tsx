import cn from 'classnames';
import { FC, useState } from 'react';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { TSearchProps } from './Command.types';
import './Command.css';

export const Search: FC<TSearchProps> = ({ options, className, isLoading }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleValueChange = (value: string) => {
    setQuery(value);
    setOpen(!!value);
  };

  const handleSelectItem = (value: string) => {
    console.log('Click:', value);
    setOpen(false);
    setQuery('');
  };

  const handleEscape = () => {
    setOpen(false);
    setQuery('');
  };

  const filteredOptions =
    query.trim() !== ''
      ? options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <Command
      className={cn([
        'w-full max-w-[480px] bg-white/[0.02] text-white border border-white/[0.1] relative overflow-visible rounded-[12px]',
        className,
      ])}
    >
      <CommandInput
        placeholder="Search collection, item or wallet"
        value={query}
        onValueChange={handleValueChange}
        className="border-b-0"
        disabled={isLoading}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            handleEscape();
          }
        }}
      />

      <div className="bg-white/[0.08] backdrop-blur-xl absolute top-2 right-2 min-w-5 p-1 text-xs text-center text-white/[0.4] z-10 rounded-sm font-sans">
        {query !== '' ? 'Esc' : '/'}
      </div>

      <CommandList
        className={cn(
          'absolute w-full max-w-[480px] bg-bgBase border-white/[0.1] rounded-sm',
          open ? 'border' : ''
        )}
      >
        {open &&
          (filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={handleSelectItem}
                className="data-[selected=true]:bg-white/[0.04] data-[selected=true]:text-white"
              >
                {option.label}
              </CommandItem>
            ))
          ) : (
            <CommandEmpty>No results found.</CommandEmpty>
          ))}
      </CommandList>
    </Command>
  );
};
