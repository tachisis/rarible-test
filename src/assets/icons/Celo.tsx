import { FC, SVGProps } from 'react';

const Celo: FC<SVGProps<SVGSVGElement> & { size?: number }> = ({
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
    <g clipPath="url(#clip0_169_1333)">
      <path
        d="M10 22C4.47715 22 0 17.5228 0 12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12C20 17.5228 15.5228 22 10 22Z"
        fill="#FCFF52"
      />
      <path
        d="M15 7H5V17H15V13.5091H13.3394C12.7676 14.7833 11.4804 15.6684 10.0078 15.6684C7.9765 15.6684 6.33159 14.0078 6.33159 11.9922C6.32898 9.9765 7.9765 8.33159 10.0078 8.33159C11.5091 8.33159 12.7963 9.24543 13.3681 10.5483H15V7Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_169_1333">
        <rect width="20" height="20" fill="white" transform="translate(0 2)" />
      </clipPath>
    </defs>
  </svg>
);

export default Celo;
