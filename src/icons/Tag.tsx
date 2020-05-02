import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Tag = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M2 8v8a1 1 0 001 1h13.62a1 1 0 00.76-.35l3.428-4a1 1 0 000-1.3l-3.428-4a1 1 0 00-.76-.35H3a1 1 0 00-1 1zM0 8v8a3 3 0 003 3h13.62a3 3 0 002.278-1.048l3.428-4a3 3 0 000-3.904l-3.428-4A3 3 0 0016.62 5H3a3 3 0 00-3 3z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 13a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Tag;
