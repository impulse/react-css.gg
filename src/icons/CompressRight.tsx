import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CompressRight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14.567 8.03l6.343-6.26 1.405 1.423-6.323 6.24 3.57.015-.009 2-7-.028.028-7 2 .008-.014 3.601zM7.979 14.543l-3.57.003-.002-2 7-.006.006 7-2 .002-.003-3.602-6.314 6.29-1.411-1.416 6.294-6.271z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CompressRight;
