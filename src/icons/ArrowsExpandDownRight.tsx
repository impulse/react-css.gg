import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsExpandDownRight = forwardRef(
  ({ size = 24, ...props }: Props, ref: any) => {
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
          d="M11 5a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5zM9 5H5v4h4V5z"
          fill="currentColor"
        />
        <path
          d="M19 13h2v8h-8v-2h4.586l-5.364-5.364a1 1 0 011.414-1.414L19 17.586V13z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowsExpandDownRight;
