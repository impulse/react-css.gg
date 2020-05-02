import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const LogOff = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13 4.009a1 1 0 10-2 0l-.003 8.003a1 1 0 002 0L13 4.01z"
        fill="currentColor"
      />
      <path
        d="M4 12.992c0-2.21.895-4.21 2.343-5.657l1.414 1.414a6 6 0 108.485 0l1.415-1.414A8 8 0 114 12.992z"
        fill="currentColor"
      />
    </svg>
  );
});
export default LogOff;
