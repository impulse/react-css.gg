import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const GitPull = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7 5a2 2 0 113.763.945h.58a4 4 0 014 4v1.28a2 2 0 01-1.02 3.72 2 2 0 01-.98-3.745V9.945a2 2 0 00-2-2H10v9.323A2 2 0 019 21a2 2 0 01-1-3.732V6.732A2 2 0 017 5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default GitPull;
