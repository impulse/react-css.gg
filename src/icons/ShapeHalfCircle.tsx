import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ShapeHalfCircle = forwardRef(
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
        <path d="M16 4a8 8 0 100 16v-3a5 5 0 010-10V4z" fill="currentColor" />
      </svg>
    );
  }
);
export default ShapeHalfCircle;
