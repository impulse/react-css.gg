import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ToolbarTop = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M18 11H6V9h12v2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3H5a3 3 0 00-3 3v8zm3 1h14a1 1 0 001-1V8a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ToolbarTop;
