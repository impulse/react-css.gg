import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowTopLeftR = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M10 13.963H8v-6h6v2h-2.586l5.33 5.33-1.414 1.414-5.33-5.33v2.586z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 19a4 4 0 004 4h14a4 4 0 004-4V5a4 4 0 00-4-4H5a4 4 0 00-4 4v14zm4 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowTopLeftR;
