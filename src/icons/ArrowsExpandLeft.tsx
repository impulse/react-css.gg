import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsExpandLeft = forwardRef(
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
          d="M10.1 4.1v-2h-8v8h2V5.516l5.779 5.778 1.414-1.414L5.515 4.1H10.1zM19.9 13.9h2v8h-8v-2h4.585l-5.778-5.779 1.414-1.414 5.778 5.778V13.9z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowsExpandLeft;
