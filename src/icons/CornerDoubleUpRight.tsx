import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerDoubleUpRight = forwardRef(
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
          d="M14.75 7.784l1.414-1.415 4.242 4.243-4.242 4.243-1.415-1.415 2.829-2.828-2.829-2.828z"
          fill="currentColor"
        />
        <path
          d="M10.507 13.44l1.414 1.415 4.243-4.243L11.92 6.37l-1.414 1.415 1.847 1.846h-4.76a4 4 0 00-4 4v4h2v-4a2 2 0 012-2h4.723l-1.81 1.81z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default CornerDoubleUpRight;
