import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongRightL = forwardRef(
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
          d="M18.916 7.757l4.25 4.236-4.236 4.25-1.416-1.412 1.819-1.825-16.5.022v2.002h-2v-6h2v1.998l16.51-.022-1.838-1.832 1.411-1.417z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowLongRightL;
