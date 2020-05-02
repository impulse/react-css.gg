import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatBold = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.946 10.783l-1.67 1.426 2.172.324A3.001 3.001 0 0113 12.5H8v-1h3a3 3 0 001.946-.717z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
});
export default FormatBold;
