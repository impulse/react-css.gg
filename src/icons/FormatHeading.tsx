import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatHeading = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M6 19V5h2v6h8V5h2v14h-2v-6H8v6H6z" fill="currentColor" />
    </svg>
  );
});
export default FormatHeading;
