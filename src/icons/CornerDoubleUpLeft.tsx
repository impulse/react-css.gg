import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerDoubleUpLeft = forwardRef(
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
          d="M9.25 7.784L7.836 6.369l-4.242 4.243 4.242 4.243L9.25 13.44l-2.828-2.828L9.25 7.784z"
          fill="currentColor"
        />
        <path
          d="M13.493 13.44l-1.414 1.415-4.243-4.243L12.08 6.37l1.414 1.415-1.847 1.846h4.76a4 4 0 014 4v4h-2v-4a2 2 0 00-2-2h-4.723l1.81 1.81z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default CornerDoubleUpLeft;
