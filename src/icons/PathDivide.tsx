import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PathDivide = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M5 5h10v4H9v6H5V5z" fill="currentColor" />
      <path d="M9 15v4h10V9h-4v6H9z" fill="currentColor" />
      <path d="M10 10h4v4h-4v-4z" fill="currentColor" />
    </svg>
  );
});
export default PathDivide;
