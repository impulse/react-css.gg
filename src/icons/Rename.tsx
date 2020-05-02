import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Rename = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M10 4H8v2H5a3 3 0 00-3 3v6a3 3 0 003 3h3v2h2V4zM8 8v8H5a1 1 0 01-1-1V9a1 1 0 011-1h3z"
        fill="currentColor"
      />
      <path
        d="M19 16h-7v2h7a3 3 0 003-3V9a3 3 0 00-3-3h-7v2h7a1 1 0 011 1v6a1 1 0 01-1 1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Rename;
