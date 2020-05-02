import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Tree = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 17.9A5.002 5.002 0 017 13V7a5 5 0 0110 0v6a5.002 5.002 0 01-4 4.9V21a1 1 0 11-2 0v-3.1zM12 4a3 3 0 013 3v6a3.001 3.001 0 01-2 2.83V11a1 1 0 10-2 0v4.83A3.001 3.001 0 019 13V7a3 3 0 013-3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Tree;
