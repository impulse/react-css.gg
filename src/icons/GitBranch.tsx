import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const GitBranch = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9 3a2 2 0 00-1 3.732v10.536A2 2 0 1010.732 20h1.227a4 4 0 004-4v-1.268a2 2 0 00-1-3.732 2 2 0 00-1 3.732V16a2 2 0 01-2 2h-1.227a2.01 2.01 0 00-.732-.732V6.732A2 2 0 009 3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default GitBranch;
