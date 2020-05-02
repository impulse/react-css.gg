import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongDownC = forwardRef(
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
          d="M11 6.85a3.001 3.001 0 112 0l.012 12.287 1.812-1.822 1.419 1.41-4.231 4.255-4.255-4.23 1.41-1.42 1.845 1.835L11 6.85zm.998-1.83a1 1 0 110-2 1 1 0 010 2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowLongDownC;
