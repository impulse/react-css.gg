import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const EditFlipV = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17 18a1 1 0 01-1 1H8a1 1 0 01-1-1v-3H5v3a3 3 0 003 3h8a3 3 0 003-3v-3h-2v3z"
        fill="currentColor"
        fillOpacity={0.5}
      />
      <path
        d="M16 5a1 1 0 011 1v3h2V6a3 3 0 00-3-3H8a3 3 0 00-3 3v3h2V6a1 1 0 011-1h8zM21 13v-2H3v2h18z"
        fill="currentColor"
      />
    </svg>
  );
});
export default EditFlipV;
