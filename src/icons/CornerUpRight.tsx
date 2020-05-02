import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerUpRight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13.372 14.722l1.412 1.417 6.377-6.35-6.35-6.378-1.417 1.411 3.776 3.793-10.305-.022a4 4 0 00-4.009 3.991l-.017 8 2 .005.017-8a2 2 0 012.004-1.996l10.636.023-4.124 4.106z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CornerUpRight;
