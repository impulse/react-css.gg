import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Browse = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.364 13.121c.924.924 1.12 2.3.586 3.415l1.535 1.535a1 1 0 01-1.414 1.414l-1.535-1.535a3.001 3.001 0 01-3.415-4.829 3 3 0 014.243 0zM12.95 15.95a1 1 0 10-1.414-1.414 1 1 0 001.414 1.414z"
        fill="currentColor"
      />
      <path d="M8 5h8v2H8V5zM16 9H8v2h8V9z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4a3 3 0 013-3h10a3 3 0 013 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm3-1h10a1 1 0 011 1v16a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Browse;
