import { FC, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Command, CommandGroup, CommandItem, CommandList } from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useGetSettingsQuery } from '@/api/settingsApi/settingsApi';
import { TOption } from '@/api/settingsApi/settingsApi.types';
import { ChevronDown } from 'lucide-react';
import { DEFAULT_TIMEFRAME } from './Timeframe.constants';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { TTimeframeProps } from './Timeframe.types';

export const Timeframe: FC<TTimeframeProps> = ({ variant = 'mobile' }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(DEFAULT_TIMEFRAME);

  const [timeframeOptions, setTimeframeOptions] = useState<TOption[]>([]);

  const { data } = useGetSettingsQuery();

  useEffect(() => {
    if (data?.timeframe_options) {
      setTimeframeOptions(data.timeframe_options);
    }
  }, [data]);

  const handleDesktopValue = (value: string) => {
    setValue(value);
    console.log('Do something on value change');
  };

  const handleMobileValue = (currentValue: string) => {
    setValue(currentValue === value ? '' : currentValue);
    setOpen(false);
    console.log('Do something on value change');
  };

  const mobile = (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-fit justify-start gap-1 bg-white/[0.04] text-white rounded-[20px] hover:bg-white/[0.08] text-sm py-2 px-3"
        >
          {value
            ? timeframeOptions.find((time) => time.value === value)?.value
            : 'Period'}
          <ChevronDown className="ml-auto" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={2}
        className="w-[200px] p-0 bg-bgBase text-white  border-white/[0.1]"
      >
        <Command className="bg-bgBase text-white border-0">
          <CommandList>
            <CommandGroup>
              {timeframeOptions.map((time) => (
                <CommandItem
                  key={time.value}
                  value={time.value}
                  onSelect={handleMobileValue}
                  className="text-white flex gap-2 items-center"
                >
                  {time.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );

  const desktop = (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={handleDesktopValue}
      className="bg-white/[0.04] text-white rounded-[20px] p-1"
    >
      {timeframeOptions.map((time) => (
        <ToggleGroupItem
          key={time.value}
          value={time.value}
          className="p-0 min-w-10 h-7 rounded-[20px] bg-transparent hover:bg-transparent hover:text-white opacity-60 data-[state=on]:opacity-100"
        >
          {time.value}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );

  return variant === 'desktop' ? desktop : mobile;
};
