import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const RowLast = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <g opacity={0.5} fill="currentColor">
        <path d="M6 13a1 1 0 110-2h8a1 1 0 110 2H6zM6 9a1 1 0 010-2h8a1 1 0 110 2H6z" />
      </g>
      <path
        d="M5 16a1 1 0 001 1h12a1 1 0 100-2H6a1 1 0 00-1 1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default RowLast;
