import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatSeparator = forwardRef(
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
        <g opacity={0.5} fill="currentColor">
          <path d="M16 5a1 1 0 100-2H8a1 1 0 100 2h8zM16 7a1 1 0 110 2H8a1 1 0 110-2h8zM17 12a1 1 0 01-1 1H8a1 1 0 110-2h8a1 1 0 011 1zM16 21a1 1 0 100-2H8a1 1 0 100 2h8z" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 16a1 1 0 01-1 1H4a1 1 0 110-2h16a1 1 0 011 1z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default FormatSeparator;
