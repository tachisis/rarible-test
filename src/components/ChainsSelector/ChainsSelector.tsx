import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useGetSettingsQuery } from '@/api/settingsApi/settingsApi';
import { TOption } from '@/api/settingsApi/settingsApi.types';
import { ChevronDown } from 'lucide-react';
import { ChainIcon } from '../ChainIcon/ChainIcon';
import { convertToChainName } from './ChainSelector.helpers';

export const ChainsSelector = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('allchains');

  const [chainsOptions, setChainsOptions] = useState<TOption[]>([]);

  const { data } = useGetSettingsQuery();

  useEffect(() => {
    if (data?.chains_options) {
      setChainsOptions(data.chains_options);
    }
  }, [data]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-full sm:min-w-[162px] justify-start gap-1 bg-white/[0.04] text-white rounded-[20px] hover:bg-white/[0.08] text-sm py-2 px-3"
        >
          {value ? (
            <span className="flex gap-2 items-center">
              <ChainIcon name={convertToChainName(value)} size={16} />
              {chainsOptions.find((chain) => chain.value === value)?.label}
            </span>
          ) : (
            'Search chain...'
          )}
          <ChevronDown className="ml-auto" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={2}
        className="w-[200px] p-0 bg-bgBase text-white  border-white/[0.1]"
      >
        <Command className="bg-bgBase text-white border-0 custom-scrollbar">
          <CommandInput placeholder="Search chain..." className="h-9" />
          <CommandList>
            <CommandEmpty>No chain found.</CommandEmpty>
            <CommandGroup>
              {chainsOptions.map((chain) => (
                <CommandItem
                  key={chain.value}
                  value={chain.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                  className="text-white flex gap-2 items-center data-[selected=true]:bg-white/[0.04] data-[selected=true]:text-white"
                >
                  <ChainIcon name={convertToChainName(chain.value)} size={16} />
                  {chain.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
