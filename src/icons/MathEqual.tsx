import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MathEqual = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 9a1 1 0 100 2h14a1 1 0 100-2H5zM5 13a1 1 0 100 2h14a1 1 0 100-2H5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MathEqual;
