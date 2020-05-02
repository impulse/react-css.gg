import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Serverless = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11.787 6H5v3h5.695l1.092-3zM9.967 11H5v3h3.875l1.092-3zM11.004 14l1.092-3H20v3h-8.996zM8.148 16H5v3h2.056l1.092-3zM9.184 19l1.092-3H20v3H9.184zM12.824 9l1.092-3H20v3h-7.176z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Serverless;
