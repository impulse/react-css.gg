import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SmileNone = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8 9a1 1 0 000 2h1a1 1 0 100-2H8zM15 9a1 1 0 100 2h1a1 1 0 100-2h-1zM9 15a1 1 0 100 2h6a1 1 0 100-2H9z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
        fill="currentColor"
      />
    </svg>
  );
});
export default SmileNone;
