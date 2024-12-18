import { TSearchOption } from "../../api/settingsApi/settingsApi.types";

export type TSearchProps = {
  options: TSearchOption[];
  className?: string;
  isLoading: boolean;
}