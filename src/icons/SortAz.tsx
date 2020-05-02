import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SortAz = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6 8a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM8 12a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zM11 15a1 1 0 100 2h2a1 1 0 100-2h-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default SortAz;
