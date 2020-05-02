import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsScrollH = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15.305 12l2.825-2.825-1.414-1.414-2.825 2.825-.004-.004-1.414 1.414.004.004-.004.004 1.414 1.414.004-.004 2.825 2.825 1.414-1.414L15.305 12zM10.11 10.586l.003-.004 1.414 1.414-.004.004.004.004-1.414 1.414-.004-.004-2.825 2.825-1.414-1.414L8.695 12 5.87 9.175l1.414-1.414 2.825 2.825z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowsScrollH;
