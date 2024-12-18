export const convertToChainName = (value: string): string => {
  if (!value || value === '') {
    return value;
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
};
