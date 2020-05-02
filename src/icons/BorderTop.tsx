import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const BorderTop = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M8 16h8V9h3v10H5V9h3v7z" fill="currentColor" fillOpacity={0.3} />
      <path d="M5 7h14V4H5v3z" fill="#100" />
    </svg>
  );
});
export default BorderTop;
