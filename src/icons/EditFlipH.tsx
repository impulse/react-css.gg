import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const EditFlipH = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M18 7a1 1 0 011 1v8a1 1 0 01-1 1h-3v2h3a3 3 0 003-3V8a3 3 0 00-3-3h-3v2h3z"
        fill="currentColor"
        fillOpacity={0.5}
      />
      <path
        d="M13 3h-2v18h2V3zM5 8a1 1 0 011-1h3V5H6a3 3 0 00-3 3v8a3 3 0 003 3h3v-2H6a1 1 0 01-1-1V8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default EditFlipH;
