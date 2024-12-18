import { ButtonHTMLAttributes } from "react";

export type TUser = {
  name: string;
  icon?: string;
  account: string;
  chain: string;
}

export type TProfileProps = {
  user: TUser | null;
} & ButtonHTMLAttributes<HTMLButtonElement>;