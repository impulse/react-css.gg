import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronDoubleDown = forwardRef(
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
          d="M7.757 5.636L6.343 7.05 12 12.707l5.657-5.657-1.414-1.414L12 9.88 7.757 5.636z"
          fill="currentColor"
        />
        <path
          d="M6.343 12.707l1.414-1.414L12 15.536l4.243-4.243 1.414 1.414L12 18.364l-5.657-5.657z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ChevronDoubleDown;
