import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Briefcase = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M14 11h-4v2h4v-2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5V4a2 2 0 012-2h6a2 2 0 012 2v1h3a3 3 0 013 3v10a3 3 0 01-3 3H4a3 3 0 01-3-3V8a3 3 0 013-3h3zm2-1h6v1H9V4zM4 7a1 1 0 00-1 1v6h18V8a1 1 0 00-1-1H4zM3 18v-2h18v2a1 1 0 01-1 1H4a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Briefcase;
