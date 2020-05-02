import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronDoubleLeft = forwardRef(
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
          d="M18.364 7.757L16.95 6.343 11.293 12l5.657 5.657 1.414-1.414L14.12 12l4.243-4.243z"
          fill="currentColor"
        />
        <path
          d="M11.293 6.343l1.414 1.414L8.464 12l4.243 4.243-1.414 1.414L5.636 12l5.657-5.657z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ChevronDoubleLeft;
