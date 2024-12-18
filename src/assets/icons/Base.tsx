import { FC, SVGProps } from 'react';

const Base: FC<SVGProps<SVGSVGElement> & { size?: number }> = ({
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
    <g clipPath="url(#clip0_169_1321)">
      <path
        d="M10 22C4.47715 22 0 17.5228 0 12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12C20 17.5228 15.5228 22 10 22Z"
        fill="#0052FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 12C17.5 16.1421 14.1363 19.5 9.98691 19.5C6.05025 19.5 2.82074 16.4775 2.5 12.6304H12.4306V11.3696H2.5C2.82074 7.52244 6.05025 4.5 9.98691 4.5C14.1363 4.5 17.5 7.85786 17.5 12Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_169_1321">
        <rect width="20" height="20" fill="white" transform="translate(0 2)" />
      </clipPath>
    </defs>
  </svg>
);

export default Base;
