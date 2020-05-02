import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongDownL = forwardRef(
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
          d="M8.998.972v2h3l-1 .001.014 16.24-1.844-1.834-1.41 1.418 4.254 4.23 4.23-4.254-1.417-1.41-1.813 1.823-.014-16.214h2v-2h-6z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowLongDownL;
