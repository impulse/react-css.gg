import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowDown = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 3.672h2V16.5l3.243-3.243 1.414 1.415L12 20.328l-5.657-5.656 1.414-1.415L11 16.5V3.672z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowDown;
