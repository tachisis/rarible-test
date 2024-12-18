import { FC, SVGProps } from 'react';

const Rari: FC<SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 24,
  ...rest
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...rest}
  >
    <circle fill="#fff" cx="255.7" cy="259.9" r="220.3" />
    <radialGradient
      id="SVGID_1_"
      cx="52.65"
      cy="388.824"
      r="367.822"
      gradientTransform="matrix(1 0 0 -1 0 514)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".069" stopColor="#1c5dff" />
      <stop offset=".181" stopColor="#2263ff" />
      <stop offset=".338" stopColor="#3475ff" />
      <stop offset=".521" stopColor="#5292ff" />
      <stop offset=".578" stopColor="#5d9dff" />
      <stop offset=".639" stopColor="#619bfe" />
      <stop offset=".71" stopColor="#7098fc" />
      <stop offset=".787" stopColor="#8791f9" />
      <stop offset=".867" stopColor="#a889f4" />
      <stop offset=".949" stopColor="#d27eef" />
      <stop offset="1" stopColor="#f077eb" />
    </radialGradient>
    <path
      fill="url(#SVGID_1_)"
      d="M295.3 224.8h-81.1V239h81.1c3.9 0 7.1-3.2 7.1-7.1s-3.2-7.1-7.1-7.1z"
    />
    <path
      fill="none"
      d="M295.3 224.8h-81.1V239h81.1c3.9 0 7.1-3.2 7.1-7.1s-3.2-7.1-7.1-7.1z"
    />
    <radialGradient
      id="SVGID_2_"
      cx="52.65"
      cy="388.824"
      r="367.822"
      gradientTransform="matrix(1 0 0 -1 0 514)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".069" stopColor="#1c5dff" />
      <stop offset=".181" stopColor="#2263ff" />
      <stop offset=".338" stopColor="#3475ff" />
      <stop offset=".521" stopColor="#5292ff" />
      <stop offset=".578" stopColor="#5d9dff" />
      <stop offset=".639" stopColor="#619bfe" />
      <stop offset=".71" stopColor="#7098fc" />
      <stop offset=".787" stopColor="#8791f9" />
      <stop offset=".867" stopColor="#a889f4" />
      <stop offset=".949" stopColor="#d27eef" />
      <stop offset="1" stopColor="#f077eb" />
    </radialGradient>
    <path
      fill="url(#SVGID_2_)"
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm107.6 288.6v44.9h-61.9v-38.1s2.5-16.1-20.3-16.1h-67v54.2h-66.1V178.4h172.9s42.4 5.1 42.4 36.4-20.3 40.7-20.3 40.7 20.3 12.8 20.3 33.1z"
    />
  </svg>
);

export default Rari;
