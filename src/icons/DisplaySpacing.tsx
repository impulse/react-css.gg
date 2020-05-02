import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const DisplaySpacing = forwardRef(
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
        <path d="M3 21V3h2v18H3z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 3h10v18H7V3zm2 2v14h6V5H9z"
          fill="currentColor"
        />
        <path d="M19 3v18h2V3h-2z" fill="currentColor" />
      </svg>
    );
  }
);
export default DisplaySpacing;
