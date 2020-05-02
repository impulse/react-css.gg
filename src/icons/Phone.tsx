import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Phone = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M22 12A10.002 10.002 0 0012 2v2a8.003 8.003 0 017.391 4.938A8 8 0 0120 12h2zM2 10V5a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H6a8 8 0 008 8v-2a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-5C7.373 22 2 16.627 2 10z"
        fill="currentColor"
      />
      <path
        d="M17.543 9.704c.302.728.457 1.508.457 2.296h-1.8A4.199 4.199 0 0012 7.8V6a6 6 0 015.543 3.704z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Phone;
