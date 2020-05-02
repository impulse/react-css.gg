import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsHAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4.243 7.757l1.414 1.415L3.828 11h16.344l-1.829-1.828 1.414-1.415L24 12l-4.243 4.243-1.414-1.415L20.171 13H3.828l1.829 1.828-1.414 1.415L0 12l4.243-4.243z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowsHAlt;
