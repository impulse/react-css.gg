import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Twitter = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8 3a2 2 0 012 2v3h6a2 2 0 110 4h-6v2a3 3 0 003 3h3a2 2 0 110 4h-3a7 7 0 01-7-7V5a2 2 0 012-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Twitter;
