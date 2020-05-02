import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Bell = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14 3v.29c2.892.86 5 3.539 5 6.71v7h1v2H4v-2h1v-7a7.003 7.003 0 015-6.71V3a2 2 0 114 0zM7 17h10v-7a5 5 0 00-10 0v7zm7 4v-1h-4v1a2 2 0 104 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Bell;
