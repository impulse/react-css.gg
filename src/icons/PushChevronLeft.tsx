import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushChevronLeft = forwardRef(
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
          d="M16.929 5l1.414 1.414-5.657 5.657 5.657 5.657-1.414 1.414-7.071-7.07L16.929 5zM8 19V5H6v14h2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PushChevronLeft;
