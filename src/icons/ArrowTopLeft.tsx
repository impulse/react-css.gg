import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowTopLeft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13.475 5.495l.004 2-4.557.01 9.603 9.585-1.412 1.415-9.63-9.61.01 4.614-2 .004-.018-8 8-.018z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowTopLeft;
