import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerDownRight = forwardRef(
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
          d="M6.85 13.4a2 2 0 01-2-2v-8h-2v8a4 4 0 004 4h10.306l-3.785 3.785 1.415 1.414 6.364-6.364-6.364-6.364-1.415 1.415 4.115 4.114H6.85z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default CornerDownRight;
