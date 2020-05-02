import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatUppercase = forwardRef(
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
          d="M13 9h-3v8H8V9H5V7h8v2zm5 4h-2v4h-2v-4h-2v-2h6v2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default FormatUppercase;
