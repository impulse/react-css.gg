import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Plug = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9 2a1 1 0 00-1 1v2a1 1 0 102 0V3a1 1 0 00-1-1zM8 9h8v2a4 4 0 01-8 0V9zm5 7.917A6.002 6.002 0 0018 11V7H6v4a6.002 6.002 0 005 5.917V22a1 1 0 102 0v-5.083zM14 3a1 1 0 112 0v2a1 1 0 11-2 0V3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Plug;
