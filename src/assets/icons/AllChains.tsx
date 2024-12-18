import { FC, SVGProps } from 'react';

const Allchains: FC<SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 24,
  ...rest
}) => (
  <svg
    id="AllChains"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    {...rest}
  >
    <path
      d="M5.667 2.667h-2c-.667 0-1 .333-1 1v2c0 .666.333 1 1 1h2c.666 0 1-.334 1-1v-2c0-.667-.334-1-1-1z"
      fill="#FF0420"
    />
    <path
      d="M5.667 9.333h-2c-.667 0-1 .334-1 1v2c0 .667.333 1 1 1h2c.666 0 1-.333 1-1v-2c0-.666-.334-1-1-1z"
      fill="#135FFD"
    />
    <path
      d="M12.333 2.667h-2c-.667 0-1 .333-1 1v2c0 .666.333 1 1 1h2c.667 0 1-.334 1-1v-2c0-.667-.333-1-1-1z"
      fill="#8247E5"
    />
    <path
      d="M12.333 9.333h-2c-.667 0-1 .334-1 1v2c0 .667.333 1 1 1h2c.667 0 1-.333 1-1v-2c0-.666-.333-1-1-1z"
      fill="#F0B90B"
    />
  </svg>
);

export default Allchains;
