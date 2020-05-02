import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Glass = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17 10a5.002 5.002 0 01-4 4.9V17h2v2H9v-2h2v-2.1A5.002 5.002 0 017 10V5h10v5zm-2-3H9v3a3 3 0 106 0V7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Glass;
