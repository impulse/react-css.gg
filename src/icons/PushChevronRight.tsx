import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushChevronRight = forwardRef(
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
          d="M7.414 5L6 6.414l5.657 5.657L6 17.728l1.414 1.414 7.071-7.07L7.415 5zM16.343 19V5h2v14h-2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PushChevronRight;
