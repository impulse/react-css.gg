import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SpaceBetweenV = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 5v4h14V5h-2v2H7V5H5zM5 19v-4h14v4h-2v-2H7v2H5zM7 11h10v2H7v-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default SpaceBetweenV;
