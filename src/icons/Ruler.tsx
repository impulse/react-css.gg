import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Ruler = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 6a3 3 0 00-3 3v7a3 3 0 003 3h18a3 3 0 003-3V9a3 3 0 00-3-3H3zm6 2H7v5a1 1 0 11-2 0V8H3a1 1 0 00-1 1v7a1 1 0 001 1h18a1 1 0 001-1V9a1 1 0 00-1-1h-2v3a1 1 0 11-2 0V8h-2v5a1 1 0 11-2 0V8h-2v3a1 1 0 11-2 0V8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Ruler;
