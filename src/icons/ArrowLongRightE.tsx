import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongRightE = forwardRef(
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
          d="M22.986 11.993l-4.235 4.25-1.417-1.412 1.815-1.82-12.118.04.01 2-6 .027-.028-6 6-.027.01 2 12.144-.04-1.842-1.837 1.412-1.417 4.25 4.236zm-19.964-.924l.01 2 2-.01-.01-2-2 .01z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowLongRightE;
