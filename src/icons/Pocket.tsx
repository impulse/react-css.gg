import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Pocket = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 4h18v7a9 9 0 11-18 0V4zM1 2h22v9c0 6.075-4.925 11-11 11S1 17.075 1 11V2zm10.293 12.694a1 1 0 001.414 0l4.243-4.243a1 1 0 10-1.414-1.414L12 12.572 8.464 9.037A1 1 0 007.05 10.45l4.243 4.242z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Pocket;
