import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerDoubleLeftUp = forwardRef(
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
          d="M7.784 9.25L6.37 7.836l4.242-4.242 4.243 4.242L13.44 9.25l-2.829-2.828L7.784 9.25z"
          fill="currentColor"
        />
        <path
          d="M13.44 13.493l1.415-1.414-4.243-4.243L6.37 12.08l1.414 1.414 1.847-1.847v4.76a4 4 0 004 4h4v-2h-4a2 2 0 01-2-2v-4.723l1.81 1.81z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default CornerDoubleLeftUp;
