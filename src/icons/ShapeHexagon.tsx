import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ShapeHexagon = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6 15.235l6 3.333 6-3.333v-6.47l-6-3.333-6 3.333v6.47zM12 2L3 7v10l9 5 9-5V7l-9-5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ShapeHexagon;
