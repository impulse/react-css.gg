import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const InsertBeforeO = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 14a8 8 0 1016 0 8 8 0 00-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z"
        fill="currentColor"
      />
    </svg>
  );
});
export default InsertBeforeO;
