import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ShapeTriangle = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.66 5L3 20h17.32L11.66 5zm0 6l-3.464 6h6.928l-3.464-6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ShapeTriangle;
