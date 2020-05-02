import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const LayoutPin = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16.93 4.016h-2.165a3.001 3.001 0 00-5.67 0H6.932a3 3 0 00-3 3v2.196a3.001 3.001 0 000 5.608v2.196a3 3 0 003 3h2.154a3.001 3.001 0 005.692 0h2.154a3 3 0 003-3v-2.171a3.001 3.001 0 000-5.658V7.016a3 3 0 00-3-3zm-11 10.853v2.147a1 1 0 001 1H9.12a3.001 3.001 0 015.623 0h2.189a1 1 0 001-1v-2.17a3.001 3.001 0 010-5.66v-2.17a1 1 0 00-1-1h-2.177a3.001 3.001 0 01-5.647 0H6.931a1 1 0 00-1 1v2.147a3.001 3.001 0 010 5.706z"
        fill="currentColor"
      />
    </svg>
  );
});
export default LayoutPin;
