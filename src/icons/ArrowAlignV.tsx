import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowAlignV = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7 11v2h10v-2H7zM7.757 18l1.415-1.414L11 18.414V14h2v4.414l1.828-1.828L16.243 18 12 22.243 7.757 18zM16.243 6l-1.414 1.414L13 5.586V10h-2V5.586L9.172 7.414 7.757 6 12 1.757 16.243 6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowAlignV;
