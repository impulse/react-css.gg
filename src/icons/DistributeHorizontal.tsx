import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const DistributeHorizontal = forwardRef(
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
          d="M11 9h2v6h-2V9z"
          stroke="currentColor"
          strokeOpacity={0.5}
          strokeWidth={2}
        />
        <path d="M5 5v14h2V5H5zM17 5v14h2V5h-2z" fill="currentColor" />
      </svg>
    );
  }
);
export default DistributeHorizontal;
