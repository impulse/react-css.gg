import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Unblock = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5.636 18.364A9 9 0 1018.364 5.636 9 9 0 005.636 18.364zm2.171-.757a7.001 7.001 0 009.8-9.8l-2.779 2.779a1 1 0 01-1.414-1.414l2.778-2.779a7.002 7.002 0 00-9.799 9.8l2.779-2.779a1 1 0 011.414 1.414l-2.779 2.779z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Unblock;
