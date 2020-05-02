import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatRight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M20 5a1 1 0 110 2H4a1 1 0 010-2h16zM20 9a1 1 0 110 2h-8a1 1 0 110-2h8zM21 14a1 1 0 00-1-1H4a1 1 0 100 2h16a1 1 0 001-1zM20 17a1 1 0 110 2h-8a1 1 0 110-2h8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default FormatRight;
