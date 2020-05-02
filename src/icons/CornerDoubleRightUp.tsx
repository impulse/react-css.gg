import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerDoubleRightUp = forwardRef(
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
          d="M16.216 9.25l1.415-1.414-4.243-4.242-4.243 4.242L10.56 9.25l2.828-2.828 2.828 2.828z"
          fill="currentColor"
        />
        <path
          d="M10.56 13.493L9.145 12.08l4.243-4.243 4.243 4.243-1.415 1.414-1.847-1.847v4.76a4 4 0 01-4 4h-4v-2h4a2 2 0 002-2v-4.723l-1.81 1.81z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default CornerDoubleRightUp;
