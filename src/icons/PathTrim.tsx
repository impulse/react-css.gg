import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PathTrim = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M5 5h10v3H8v7H5V5z" fill="currentColor" />
      <path d="M19 9H9v10h10V9z" fill="currentColor" />
    </svg>
  );
});
export default PathTrim;
