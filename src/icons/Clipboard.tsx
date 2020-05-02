import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Clipboard = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8 11a1 1 0 100 2h7.96a1 1 0 100-2H8zM8.04 15.066a1 1 0 100 2H16a1 1 0 100-2H8.04z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm2 2H5v14h14V5h-2v1a3 3 0 01-3 3h-4a3 3 0 01-3-3V5zm2 0v1a1 1 0 001 1h4a1 1 0 001-1V5H9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Clipboard;
