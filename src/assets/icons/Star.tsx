import { FC, SVGProps } from 'react';

const Star: FC<SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 24,
  ...rest
}) => (
  <svg
    id="Star"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...rest}
  >
    <path
      d="M9.207 4.106c.25-.768 1.336-.768 1.585 0l.892 2.743a.833.833 0 0 0 .792.576h2.885c.807 0 1.143 1.033.49 1.507l-2.334 1.696a.833.833 0 0 0-.303.931l.892 2.744c.25.767-.63 1.406-1.283.931L10.49 13.54a.833.833 0 0 0-.98 0l-2.333 1.695c-.653.475-1.532-.164-1.283-.931l.892-2.744a.833.833 0 0 0-.303-.931L4.149 8.932c-.653-.474-.317-1.507.49-1.507h2.885a.833.833 0 0 0 .792-.576l.891-2.743z"
      fill="currentColor"
    />
  </svg>
);

export default Star;
