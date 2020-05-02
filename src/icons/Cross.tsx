import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Cross = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13 6a1 1 0 10-2 0v3H7a1 1 0 000 2h4v7a1 1 0 102 0v-7h4a1 1 0 100-2h-4V6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Cross;
