import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ToolbarRight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M16 9h2v6h-2V9z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 8a3 3 0 00-3-3H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3V8zm-3-1H5a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1V8a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ToolbarRight;
