import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const DistributeVertical = forwardRef(
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
          d="M9 11h6v2H9v-2z"
          stroke="currentColor"
          strokeOpacity={0.5}
          strokeWidth={2}
        />
        <path d="M19 7H5V5h14v2zM19 19H5v-2h14v2z" fill="currentColor" />
      </svg>
    );
  }
);
export default DistributeVertical;
