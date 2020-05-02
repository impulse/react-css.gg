import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerUpLeft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M10.628 14.722l-1.412 1.417L2.84 9.79l6.35-6.378 1.417 1.411L6.83 8.615l10.305-.022a4 4 0 014.009 3.991l.017 8-2 .005-.017-8a2 2 0 00-2.004-1.996l-10.636.023 4.124 4.106z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CornerUpLeft;
