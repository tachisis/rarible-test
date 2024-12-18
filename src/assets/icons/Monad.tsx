import { FC, SVGProps } from 'react';

const Monad: FC<SVGProps<SVGSVGElement> & { size?: number }> = ({
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
    <g clipPath="url(#clip0_203_1261)">
      <circle cx="10" cy="12" r="10" fill="#836EF9" />
      <path
        d="M9.99994 4.5C7.83412 4.5 2.5 9.83401 2.5 12C2.5 14.1659 7.83412 19.5 9.99994 19.5C12.1657 19.5 17.5 14.1658 17.5 12C17.5 9.83411 12.1659 4.5 9.99994 4.5ZM8.83121 16.2886C7.91791 16.0398 5.4624 11.7445 5.71132 10.8312C5.96023 9.91785 10.2554 7.4624 11.1687 7.71131C12.0821 7.96019 14.5376 12.2554 14.2886 13.1687C14.0398 14.0822 9.7445 16.5376 8.83121 16.2886Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_203_1261">
        <rect width="20" height="20" fill="white" transform="translate(0 2)" />
      </clipPath>
    </defs>
  </svg>
);

export default Monad;
