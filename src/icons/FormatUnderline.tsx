import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatUnderline = forwardRef(
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
          d="M6 10V4h2v6a4 4 0 008 0V4h2v6a6 6 0 01-12 0zM7 18a1 1 0 100 2h10a1 1 0 100-2H7z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default FormatUnderline;
