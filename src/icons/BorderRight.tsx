import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const BorderRight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8 16V8h7V5H5v14h10v-3H8z"
        fill="currentColor"
        fillOpacity={0.3}
      />
      <path d="M17 19V5h3v14h-3z" fill="currentColor" />
    </svg>
  );
});
export default BorderRight;
