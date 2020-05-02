import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const InsertBefore = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 5a1 1 0 001 1h16a1 1 0 100-2H4a1 1 0 00-1 1zM12 20a1 1 0 001-1v-3h3a1 1 0 100-2h-3v-3a1 1 0 10-2 0v3H8a1 1 0 100 2h3v3a1 1 0 001 1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default InsertBefore;
