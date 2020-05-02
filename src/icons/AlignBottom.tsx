import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const AlignBottom = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M13 10h4v6h-4v-6z" fill="currentColor" fillOpacity={0.5} />
      <path d="M11 4H7v12h4V4zM18 18H6v2h12v-2z" fill="currentColor" />
    </svg>
  );
});
export default AlignBottom;
