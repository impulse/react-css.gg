import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Loupe = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M11 11V8h2v3h3v2h-3v3h-2v-3H8v-2h3z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12a9 9 0 009 9h6a3 3 0 003-3v-6a9 9 0 10-18 0zm9-7a7 7 0 110 14 7 7 0 010-14z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Loupe;
