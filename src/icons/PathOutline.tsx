import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PathOutline = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 5h10v4h4v10H9v-4H5V5zm2 2h6v2H9v4H7V7zm4 10h6v-6h-2v4h-4v2zm2-6h-2v2h2v-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PathOutline;
