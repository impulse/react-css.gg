import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Coffee = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6 2.5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 21.5a6.002 6.002 0 005.917-5H19a4 4 0 000-8v-1H1v8a6 6 0 006 6h6zM3 9.5v6a4 4 0 004 4h6a4 4 0 004-4v-6H3zm18 3a2 2 0 01-2 2v-4a2 2 0 012 2z"
        fill="currentColor"
      />
      <path
        d="M9 3.5a1 1 0 112 0v2a1 1 0 11-2 0v-2zM14 2.5a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Coffee;
