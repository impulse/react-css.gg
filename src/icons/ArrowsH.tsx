import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsH = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5.657 9.172L4.243 7.757 0 12l4.243 4.243 1.414-1.415L3.829 13H10v-2H3.83l1.828-1.828zM14 11v2h6.172l-1.829 1.828 1.414 1.415L24 12l-4.243-4.243-1.414 1.415L20.172 11H14z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowsH;
