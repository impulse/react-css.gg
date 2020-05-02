import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsExchangeAlt = forwardRef(
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
          d="M4.993 11.016a1 1 0 01-.531-1.848L7.15 6.48a1 1 0 011.414 1.415l-1.121 1.12h7.55a1 1 0 010 2h-10zM19.007 12.984a1 1 0 01.531 1.848L16.85 17.52a1 1 0 11-1.414-1.415l1.121-1.12h-7.55a1 1 0 110-2h10z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowsExchangeAlt;
