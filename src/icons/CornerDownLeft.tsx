import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerDownLeft = forwardRef(
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
          d="M17.15 13.4a2 2 0 002-2v-8h2v8a4 4 0 01-4 4H6.844l3.785 3.785L9.214 20.6 2.85 14.235l6.364-6.364 1.415 1.415L6.514 13.4H17.15z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default CornerDownLeft;
