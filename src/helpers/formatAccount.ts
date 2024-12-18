export const formatAccount = (input: string): string => {
  if (input.length < 11) return input;
  return `${input.slice(0, 4)} • • • ${input.slice(-4)}`;
};
