import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Trees = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.74 16.319A4.995 4.995 0 0110 17.9V21a1 1 0 11-2 0v-3.1A5.002 5.002 0 014 13V7a5 5 0 019.98-.453A4 4 0 0120 10v4a4.002 4.002 0 01-3 3.874V21a1 1 0 11-2 0v-3.126a4.005 4.005 0 01-2.26-1.555zM12 7v6a3.001 3.001 0 01-2 2.83V13a1 1 0 10-2 0v2.83A3.001 3.001 0 016 13V7a3 3 0 016 0zm5 8.732V13a1 1 0 10-2 0v2.732A2 2 0 0114 14v-4a2 2 0 114 0v4a2 2 0 01-1 1.732z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Trees;
