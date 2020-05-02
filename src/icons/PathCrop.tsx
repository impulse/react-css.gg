import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PathCrop = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        opacity={0.5}
        stroke="currentColor"
        strokeWidth={2}
        d="M6 6h8v8H6z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9h10v10H9V9zm6 2h2v6h-6v-2h4v-4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PathCrop;
