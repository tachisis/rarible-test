import { FC, SVGProps } from 'react';

const Moonbeam: FC<SVGProps<SVGSVGElement> & { size?: number }> = ({
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
    <g clipPath="url(#clip0_169_1386)">
      <path
        d="M10 22C4.47715 22 0 17.5228 0 12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12C20 17.5228 15.5228 22 10 22Z"
        fill="black"
      />
      <path
        d="M15.5233 15.3878C15.5256 15.0892 16.6655 15.102 16.6577 14.8229C16.6522 14.6077 16.1473 14.6127 16.306 14.1573C16.5397 13.479 16.6666 12.7506 16.6666 11.9928C16.6666 8.31469 13.6809 5.33331 9.99998 5.33331C6.31792 5.33331 3.33332 8.31469 3.33332 11.9928C3.33256 12.7464 3.46017 13.4948 3.71071 14.2057C3.80533 14.5076 3.33443 14.6261 3.33443 14.8062C3.33443 15.0887 4.32633 15.0509 4.32633 15.3789C4.32633 15.6658 3.34612 15.7537 3.34612 16.0428C3.34612 16.4415 5.5175 16.3025 5.54478 16.6455C5.56648 16.9107 4.7989 16.9263 4.79389 17.2093C4.78666 17.6608 7.75791 17.5129 7.75791 17.8137C7.75791 18.0411 6.40643 17.9588 6.40643 18.2274C6.40643 18.4959 8.18539 18.6666 10.1458 18.6666C12.1062 18.6666 13.4594 18.4487 13.4594 18.2129C13.4594 17.9777 12.197 18.0267 12.2231 17.8137C12.2688 17.4428 15.0697 17.6325 15.0697 17.2038C15.0697 16.9775 14.2993 16.9246 14.3238 16.6811C14.3594 16.3364 16.6666 16.3881 16.6666 16.0306C16.6666 15.7498 15.5239 15.6803 15.525 15.3889L15.5233 15.3878ZM13.7366 14.5226C13.6754 14.75 14.3778 14.784 14.3778 15.0214C14.3778 15.31 12.2359 15.1949 12.2571 15.5768C12.2704 15.817 13.7789 15.8576 13.7499 16.109C13.7088 16.4726 11.4144 16.2913 11.3915 16.6394C11.3748 16.8952 12.5115 16.9035 12.5137 17.1365C12.5159 17.3328 11.6209 17.4395 9.90869 17.4395C7.95662 17.4395 7.00869 17.3344 7.11612 17.1154C7.21687 16.9107 8.94463 16.9485 8.92737 16.6266C8.90956 16.3052 5.85927 16.4003 5.76687 16.0884C5.69061 15.8293 6.76935 15.7759 6.76267 15.5296C6.75543 15.2788 5.38057 15.3355 5.35052 15.0319C5.33103 14.8318 6.06911 14.8451 6.03739 14.5938C6.01401 14.4114 5.70898 14.437 5.52863 14.06C5.18098 13.3103 5.02794 12.4852 5.08364 11.6609C5.13934 10.8365 5.40198 10.0395 5.84734 9.34325C6.2927 8.64702 6.90642 8.07405 7.63189 7.67719C8.35735 7.28034 9.17119 7.0724 9.99831 7.07254C10.8092 7.07234 11.6075 7.27213 12.3225 7.65416C13.0375 8.03619 13.6469 8.58865 14.0968 9.26249C14.5467 9.93633 14.8231 10.7107 14.9015 11.5169C14.9798 12.3231 14.8577 13.1361 14.5459 13.8838C14.3149 14.4075 13.7945 14.3025 13.7349 14.5232H13.736L13.7366 14.5226Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_169_1386">
        <rect width="20" height="20" fill="white" transform="translate(0 2)" />
      </clipPath>
    </defs>
  </svg>
);

export default Moonbeam;
