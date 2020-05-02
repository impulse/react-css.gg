import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsScrollV = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13.414 10.11l.004.003-1.414 1.414-.004-.004-.004.004-1.414-1.414.004-.004L7.76 7.284 9.175 5.87 12 8.695l2.825-2.825 1.414 1.414-2.825 2.825zM12 15.305l2.825 2.825 1.414-1.414-2.825-2.825.004-.004-1.414-1.414-.004.004-.004-.004-1.414 1.414.004.004-2.825 2.825 1.414 1.414L12 15.305z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowsScrollV;
