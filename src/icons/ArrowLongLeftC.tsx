import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongLeftC = forwardRef(
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
          d="M5.27 7.757l-4.25 4.236 4.236 4.25 1.416-1.412-1.814-1.82 12.288.042a3.001 3.001 0 005.834-.975 3 3 0 00-5.825-1.025L4.839 11.01l1.843-1.836L5.27 7.757zm13.71 4.303a1 1 0 112 .009 1 1 0 01-2-.01z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowLongLeftC;
