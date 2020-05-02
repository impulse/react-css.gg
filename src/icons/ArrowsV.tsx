import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsV = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7.757 5.04l1.415 1.415L11 4.627V10h2V4.627l1.828 1.828 1.415-1.414L12 .798 7.757 5.041zM16.243 18.96l-1.415-1.415L13 19.373V14h-2v5.373l-1.828-1.828-1.415 1.414L12 23.202l4.243-4.243z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowsV;
