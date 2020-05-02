import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsVAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9.172 6.455L7.757 5.041 12 .798l4.243 4.243-1.415 1.414L13 4.627v14.746l1.828-1.828 1.415 1.414L12 23.202l-4.243-4.243 1.415-1.414L11 19.373V4.627L9.172 6.455z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowsVAlt;
