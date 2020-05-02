import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Debug = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M10 11a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM11 14a1 1 0 100 2h2a1 1 0 100-2h-2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.094 4.75A3.986 3.986 0 018 2h2a2 2 0 104 0h2a3.986 3.986 0 01-1.095 2.75A6.02 6.02 0 0117.66 8H19a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1.341A6.003 6.003 0 016.34 18H5a1 1 0 110-2h1v-2H5a1 1 0 110-2h1v-2H5a1 1 0 110-2h1.341a6.02 6.02 0 012.753-3.25zM8 16v-6a4 4 0 118 0v6a4 4 0 01-8 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Debug;
