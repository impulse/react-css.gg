import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Touchpad = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M20 21a3 3 0 003-3V6a3 3 0 00-3-3H4a3 3 0 00-3 3v12a3 3 0 003 3h16zM4 5h16a1 1 0 011 1v8H3V6a1 1 0 011-1zM3 16v2a1 1 0 001 1h7v-3H3zm10 3v-3h8v2a1 1 0 01-1 1h-7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Touchpad;
