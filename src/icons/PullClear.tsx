import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PullClear = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 6H2v10a2 2 0 002 2h16a2 2 0 002-2V6h-2v10H4V6z"
        fill="currentColor"
      />
      <path d="M6 12h12v2H6v-2zM18 8H6v2h12V8z" fill="currentColor" />
    </svg>
  );
});
export default PullClear;
