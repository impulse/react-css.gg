import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Browser = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 8a1 1 0 100-2 1 1 0 000 2zM8 7a1 1 0 11-2 0 1 1 0 012 0zM10 8a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3a3 3 0 00-3 3v12a3 3 0 003 3h18a3 3 0 003-3V6a3 3 0 00-3-3H3zm18 2H3a1 1 0 00-1 1v3h20V6a1 1 0 00-1-1zM2 18v-7h20v7a1 1 0 01-1 1H3a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Browser;
