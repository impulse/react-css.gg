import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const GitFork = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7 5a2 2 0 113 1.732v7.308h1.791a2 2 0 002-2v-1.256a2 2 0 112-.024v1.28a4 4 0 01-4 4H10v1.228A2 2 0 019 21a2 2 0 01-1-3.732V6.732A2 2 0 017 5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default GitFork;
