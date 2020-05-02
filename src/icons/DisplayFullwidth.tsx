import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const DisplayFullwidth = forwardRef(
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
        <path d="M2 5h20V3H2v2zM2 21h20v-2H2v2z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 7v10h20V7H2zm2 2h16v6H4V9z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default DisplayFullwidth;
