import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const IfDesign = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M10 5h4v14h-4V5zM5 19v-9h4v9H5zM7 5a2 2 0 100 4 2 2 0 000-4zM15 5h4v4h-4V5zM19 10h-4v4h4v-4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default IfDesign;
