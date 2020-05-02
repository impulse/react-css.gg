import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsExpandDownLeft = forwardRef(
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
          d="M13 5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5zm2 0h4v4h-4V5z"
          fill="currentColor"
        />
        <path
          d="M5 13H3v8h8v-2H6.414l5.364-5.364a1 1 0 00-1.414-1.414L5 17.586V13z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowsExpandDownLeft;
