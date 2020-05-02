import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SmileUpside = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16 11h-2a2 2 0 10-4 0H8a4 4 0 118 0zM10 14a1 1 0 10-2 0 1 1 0 002 0zM15 13a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default SmileUpside;
