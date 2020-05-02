import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Cap = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M8 18v2h8v-2H8z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.988 3.22a2 2 0 10-3.976 0 9.003 9.003 0 00-6.94 9.926A3.001 3.001 0 001 16v4a3 3 0 003 3h16a3 3 0 003-3v-4c0-1.333-.87-2.463-2.072-2.854a9.003 9.003 0 00-6.94-9.926zM12 5a7 7 0 00-6.93 8h13.86A7 7 0 0012 5zM3 16a1 1 0 011-1h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Cap;
