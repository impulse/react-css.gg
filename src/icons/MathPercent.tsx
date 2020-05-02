import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MathPercent = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16.243 6.343a1 1 0 111.414 1.414l-9.9 9.9a1 1 0 01-1.414-1.414l9.9-9.9zM9.879 9.879A2 2 0 117.05 7.05 2 2 0 019.88 9.88zM14.121 16.95a2 2 0 102.829-2.829 2 2 0 00-2.829 2.829z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MathPercent;
