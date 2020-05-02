import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PathIntersect = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15 5H5v10h4v4h10V9h-4V5zm-2 2H7v6h2V9h4V7zm4 10h-6v-2h4v-4h2v6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PathIntersect;
