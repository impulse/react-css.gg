import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsBreakeV = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16.243 5.243l-1.414 1.414L13 4.828v4.415h4v2H7v-2h4V4.828L9.172 6.657 7.757 5.243 12 1l4.243 4.243zM7 15.253v-2h10v2h-4v4.414l1.828-1.829 1.415 1.415L12 23.495l-4.243-4.242 1.415-1.415L11 19.668v-4.414H7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowsBreakeV;
