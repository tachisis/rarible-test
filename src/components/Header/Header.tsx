import { Logo } from '../Logo/Logo';
import { Search } from '../Command/Command';
import { Profile } from '../Profile/Profile';

import { Search as SearchIcon, Bell } from 'lucide-react';

import { useState, useEffect } from 'react';
import { useGetSettingsQuery } from '../../api/settingsApi/settingsApi';
import { TOption, TUser } from '../../api/settingsApi/settingsApi.types';
import { Button } from '../ui/button';

export const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [user, setUser] = useState<TUser | null>(null);
  const [searchOptions, setSearchOptions] = useState<TOption[]>([]);

  const { data, isLoading } = useGetSettingsQuery();

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }
    if (data?.search_options) {
      setSearchOptions(data.search_options);
    }
  }, [data]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="px-7 py-3 backdrop-blur-2xl">
      <div className="flex items-center justify-between">
        <Logo />

        <Search
          options={searchOptions}
          isLoading={isLoading}
          className="hidden sm:block"
        />

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSearch}
            className="sm:hidden hover:bg-transparent hover:text-white [&_svg]:w-5 [&_svg]:h-5"
          >
            <SearchIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 hover:bg-transparent hover:text-white [&_svg]:w-5 [&_svg]:h-5"
          >
            <Bell />
          </Button>
          <Profile
            user={user}
            onClick={() => {
              console.log('Click on Profile');
            }}
          />
        </div>
      </div>

      <div className={`${isSearchVisible ? 'block' : 'hidden'} py-2`}>
        <Search options={searchOptions} isLoading={isLoading} />
      </div>
    </div>
  );
};
