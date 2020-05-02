import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Today = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect
        opacity={0.5}
        x={7}
        y={9}
        width={10}
        height={10}
        rx={1}
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3H6a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM6 1a3 3 0 00-3 3v16a3 3 0 003 3h12a3 3 0 003-3V4a3 3 0 00-3-3H6z"
        fill="currentColor"
      />
      <path
        d="M7 6a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Today;
