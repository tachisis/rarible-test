import { FC, SVGProps } from 'react';

const Ton: FC<SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 24,
  ...rest
}) => (
  <svg
    id="Ton"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 56 56"
    {...rest}
  >
    <path
      fill="#0098ea"
      d="M28 56c15.5 0 28-12.5 28-28S43.5 0 28 0 0 12.5 0 28s12.5 28 28 28z"
    />
    <path
      fill="#fff"
      d="M37.6 15.6H18.4c-3.5 0-5.7 3.8-4 6.9L26.2 43c.8 1.3 2.7 1.3 3.5 0l11.8-20.5c1.8-3.1-.4-6.9-3.9-6.9zM26.3 36.8l-2.6-5-6.2-11.1c-.4-.7.1-1.6 1-1.6h7.8v17.7zm12.2-16.1l-6.2 11.1-2.6 5V19.1h7.8c.9 0 1.4.9 1 1.6z"
    />
  </svg>
);

export default Ton;
