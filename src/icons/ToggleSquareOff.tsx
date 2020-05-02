import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ToggleSquareOff = forwardRef(
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
          d="M15 9a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7a2 2 0 012-2h20a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V7zm2 0h20v10H2V7z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ToggleSquareOff;
