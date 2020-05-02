import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const QuoteO = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M20 5H4v14h16V5zM4 3a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2H4z"
        fill="currentColor"
      />
      <path
        d="M9.067 9.196h3l-2.134 5.608h-3l2.134-5.608zM14.067 9.196h3l-2.134 5.608h-3l2.134-5.608z"
        fill="currentColor"
      />
    </svg>
  );
});
export default QuoteO;
