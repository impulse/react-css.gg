import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ScreenWide = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 16H3a3 3 0 01-3-3V8a3 3 0 013-3h18a3 3 0 013 3v5a3 3 0 01-3 3h-8v1h2a1 1 0 110 2H9a1 1 0 110-2h2v-1zM3 7h18a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ScreenWide;
