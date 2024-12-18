import { FC } from 'react';
import { TProfileProps } from './Profile.types';
import { Avatar } from '../Avatar/Avatar';

import { formatAccount } from '../../helpers/formatAccount';
import { Button } from '../ui/button';

export const Profile: FC<TProfileProps> = ({ user, onClick, ...rest }) => {
  if (!user) {
    return;
  }

  const { name, icon, account, chain } = user;

  const formattedAccount = formatAccount(account);

  return (
    <Button
      variant="ghost"
      className="flex gap-3 items-center px-2 hover:bg-transparent hover:text-white"
      onClick={onClick}
      {...rest}
    >
      <Avatar name={name} icon={icon} chain={chain} />
      <span className="text-sm hidden sm:block">{formattedAccount}</span>
    </Button>
  );
};
