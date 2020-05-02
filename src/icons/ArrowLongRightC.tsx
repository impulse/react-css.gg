import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongRightC = forwardRef(
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
          d="M18.73 7.757l4.25 4.236-4.236 4.25-1.416-1.412 1.814-1.82-12.288.042a3.001 3.001 0 11-.009-2l12.316-.043-1.843-1.836 1.412-1.417zM5.02 12.06a1 1 0 10-2 .009 1 1 0 002-.01z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowLongRightC;
