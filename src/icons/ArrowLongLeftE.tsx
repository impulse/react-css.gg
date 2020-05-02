import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongLeftE = forwardRef(
  ({ size = 24, ...props }: Props, ref: any) => {
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
          d="M5.263 7.757l-4.25 4.236 4.236 4.25 1.417-1.412-1.815-1.82 12.117.04-.008 2 6 .027.026-6-6-.027-.009 2-12.144-.04 1.842-1.837-1.412-1.417zm15.714 3.312l-.009 2-2-.01.01-2 2 .01z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowLongLeftE;
