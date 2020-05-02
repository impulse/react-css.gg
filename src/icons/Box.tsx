import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Box = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M10 12a1 1 0 100 2h4a1 1 0 000-2h-4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2a3 3 0 00-3 3v14a3 3 0 003 3h16a3 3 0 003-3V5a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v3h18V5a1 1 0 00-1-1zM3 19v-9h18v9a1 1 0 01-1 1H4a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Box;
