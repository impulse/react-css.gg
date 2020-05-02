import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronDoubleUp = forwardRef(
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
          d="M17.657 11.293l-1.414 1.414L12 8.464l-4.243 4.243-1.414-1.414L12 5.636l5.657 5.657z"
          fill="currentColor"
        />
        <path
          d="M17.657 16.95l-1.414 1.414L12 14.12l-4.243 4.243-1.414-1.414L12 11.293l5.657 5.657z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ChevronDoubleUp;
