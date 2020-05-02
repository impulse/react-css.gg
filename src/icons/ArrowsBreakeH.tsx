import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsBreakeH = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9.243 7h2v4h.005v2h-.005v4h-2v-4H4.828l1.829 1.828-1.414 1.415L1 12l4.243-4.243 1.414 1.415L4.828 11h4.415V7zM15.253 7h-2v4h-.005v2h.005v4h2v-4h4.414l-1.829 1.829 1.415 1.414L23.495 12l-4.242-4.243-1.415 1.415L19.668 11h-4.414V7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowsBreakeH;
