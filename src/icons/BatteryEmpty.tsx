import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const BatteryEmpty = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M18 6H5a3 3 0 00-3 3v6a3 3 0 003 3h13a3 3 0 003-3 1 1 0 001-1v-4a1 1 0 00-1-1 3 3 0 00-3-3zm0 2H5a1 1 0 00-1 1v6a1 1 0 001 1h13a1 1 0 001-1V9a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default BatteryEmpty;
