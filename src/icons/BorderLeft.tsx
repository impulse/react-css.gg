import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const BorderLeft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M16 8v8H9v3h10V5H9v3h7z" fill="currentColor" fillOpacity={0.3} />
      <path d="M7 5v14H4V5h3z" fill="currentColor" />
    </svg>
  );
});
export default BorderLeft;
