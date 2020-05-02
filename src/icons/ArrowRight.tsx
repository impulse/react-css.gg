import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowRight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowRight;
