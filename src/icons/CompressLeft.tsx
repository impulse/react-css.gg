import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CompressLeft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7.979 9.457l-3.57-.003-.002 2 7 .006.006-7-2-.002L9.41 8.06 3.096 1.77 1.685 3.185l6.294 6.271zM19.561 14.552l-.008-2-7 .028.028 7 2-.008-.014-3.601 6.343 6.26 1.405-1.424-6.324-6.24 3.57-.015z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CompressLeft;
