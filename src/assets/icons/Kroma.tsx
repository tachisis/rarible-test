import { FC, SVGProps } from 'react';

const Kroma: FC<SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 24,
  ...rest
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g clipPath="url(#clip0_169_1356)">
      <circle cx="10" cy="12" r="10" fill="#6CD42B" />
      <path
        opacity="0.6"
        d="M9.98269 5.33331L3.33331 9.58108L6.65778 11.7054L9.98269 9.58108L13.3072 11.7054L16.6316 9.58108L9.98269 5.33331Z"
        fill="white"
      />
      <path
        d="M16.6316 9.58136L9.98269 13.8296L3.33331 9.58136V13.8296L9.98269 18.0779L16.6316 13.8296V9.58136Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_169_1356">
        <rect width="20" height="20" fill="white" transform="translate(0 2)" />
      </clipPath>
    </defs>
  </svg>
);

export default Kroma;
