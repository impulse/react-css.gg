import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Square = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M14 10h-4v4h4v-4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 9a4 4 0 014-4h6a4 4 0 014 4v6a4 4 0 01-4 4H9a4 4 0 01-4-4V9zm4-1h6a1 1 0 011 1v6a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Square;
