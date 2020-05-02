import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const AlignMiddle = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M13 9h4v6h-4V9z" fill="currentColor" fillOpacity={0.5} />
      <path d="M7 6h4v12H7V6z" fill="currentColor" />
    </svg>
  );
});
export default AlignMiddle;
