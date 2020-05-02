import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SmileMouthOpen = forwardRef(
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
          d="M12 17a4 4 0 004-4H8a4 4 0 004 4zM10 10a1 1 0 11-2 0 1 1 0 012 0zM15 11a1 1 0 100-2 1 1 0 000 2z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default SmileMouthOpen;
