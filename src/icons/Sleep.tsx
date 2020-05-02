import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Sleep = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.101 5A6.977 6.977 0 0112 19a6.977 6.977 0 01-4.899-2h9.798zm1.427-2a7 7 0 10-12.653 0h12.653z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Sleep;
