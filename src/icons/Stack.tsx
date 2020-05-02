import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Stack = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M20 4v12h2V2H8v2h12z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8v14h14V8H2zm12 2H4v10h10V10z"
        fill="currentColor"
      />
      <path d="M17 7H5V5h14v14h-2V7z" fill="currentColor" />
    </svg>
  );
});
export default Stack;
