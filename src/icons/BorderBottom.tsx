import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const BorderBottom = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M8 8h8v7h3V5H5v10h3V8z" fill="currentColor" fillOpacity={0.3} />
      <path d="M5 17h14v3H5v-3z" fill="currentColor" />
    </svg>
  );
});
export default BorderBottom;
