import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongLeftL = forwardRef(
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
          d="M5.208 7.757L.97 12.003l4.246 4.24 1.413-1.416-1.819-1.815 16.214.018-.004 2 2 .004.012-6-2-.004-.006 2.989.001-.99-16.24-.018 1.838-1.84-1.416-1.414z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowLongLeftL;
