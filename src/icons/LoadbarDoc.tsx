import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const LoadbarDoc = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17 5H7a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1zM7 3a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V6a3 3 0 00-3-3H7z"
        fill="currentColor"
      />
      <path
        d="M8 7h8v2H8V7zM8 11h8v2H8v-2zM8 15h5v2H8v-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default LoadbarDoc;
