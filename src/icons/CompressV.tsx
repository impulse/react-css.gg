import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CompressV = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13.034 7.356L15.5 4.854l1.424 1.404-4.913 4.985L7.025 6.33 8.43 4.905l2.604 2.566.05-6.627 2 .015-.05 6.497zM15.563 18.532l1.412-1.416-4.957-4.943-4.943 4.957 1.417 1.412 2.584-2.592.026 7.207 2-.008-.026-7.096 2.487 2.479z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CompressV;
