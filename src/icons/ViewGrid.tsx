import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ViewGrid = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3H5zm3 2H5a1 1 0 00-1 1v1h4V7zm2 0v2h4V7h-4zm6 0v2h4V8a1 1 0 00-1-1h-3zm-2 4h-4v2h4v-2zm2 2v-2h4v2h-4zm-2 2h-4v2h4v-2zm2 2v-2h4v1a1 1 0 01-1 1h-3zm-8 0v-2H4v1a1 1 0 001 1h3zm0-4v-2H4v2h4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ViewGrid;
