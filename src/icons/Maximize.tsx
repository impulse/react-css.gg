import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Maximize = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 3h6v2H5v4H3V3zM3 21h6v-2H5v-4H3v6zM15 21h6v-6h-2v4h-4v2zM21 3h-6v2h4v4h2V3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Maximize;
