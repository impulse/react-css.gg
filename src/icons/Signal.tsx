import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Signal = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15 7a1 1 0 112 0v10a1 1 0 11-2 0V7zM7 15a1 1 0 112 0v2a1 1 0 11-2 0v-2zM12 10a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Signal;
