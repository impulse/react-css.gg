import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowTopLeftO = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zm-2 0a9 9 0 10-18 0 9 9 0 0018 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowTopLeftO;
