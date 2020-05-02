import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Overflow = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path opacity={0.2} d="M22 11a10 10 0 01-20 0h20z" fill="currentColor" />
      <path opacity={0.3} d="M20 11a8 8 0 01-16 0h16z" fill="currentColor" />
      <path d="M20 11a8 8 0 00-16 0h16z" fill="currentColor" />
    </svg>
  );
});
export default Overflow;
