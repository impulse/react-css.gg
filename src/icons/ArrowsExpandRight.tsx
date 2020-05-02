import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsExpandRight = forwardRef(
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
          d="M13.9 4.1v-2h8v8h-2V5.516l-5.779 5.778-1.414-1.414L18.485 4.1H13.9zM4.1 13.9h-2v8h8v-2H5.516l5.778-5.779-1.414-1.414L4.1 18.485V13.9z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowsExpandRight;
