import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Ghost = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 4h12v4H3V4zM21 8h-4V4h4v4zM3 10h18v4H3v-4zM11 16H3v4h8v-4zM13 16v4h8v-4h-8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Ghost;
