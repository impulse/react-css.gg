import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const InsertBeforeR = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 3a1 1 0 010-2h14a1 1 0 110 2H5zM9 15a1 1 0 110-2h2v-2a1 1 0 112 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 19a3 3 0 003 3h10a3 3 0 003-3V9a3 3 0 00-3-3H7a3 3 0 00-3 3v10zm13 1a1 1 0 001-1V9a1 1 0 00-1-1H7a1 1 0 00-1 1v10a1 1 0 001 1h10z"
        fill="currentColor"
      />
    </svg>
  );
});
export default InsertBeforeR;
