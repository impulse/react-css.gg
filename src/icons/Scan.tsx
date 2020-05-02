import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Scan = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 3h2v18h-2V3zM5 8a1 1 0 011-1h3V5H6a3 3 0 00-3 3v8a3 3 0 003 3h3v-2H6a1 1 0 01-1-1V8zM19 8a1 1 0 00-1-1h-3V5h3a3 3 0 013 3v8a3 3 0 01-3 3h-3v-2h3a1 1 0 001-1V8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Scan;
