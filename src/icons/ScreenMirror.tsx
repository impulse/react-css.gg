import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ScreenMirror = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M5 8h14v6h-3v2h5V6H3v10h5v-2H5V8z" fill="currentColor" />
      <path d="M16.33 19L12 13l-4.33 6h8.66z" fill="currentColor" />
    </svg>
  );
});
export default ScreenMirror;
