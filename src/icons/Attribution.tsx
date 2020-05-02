import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Attribution = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6 8a2 2 0 001.732-1H14a2 2 0 110 4h-4a4 4 0 000 8h6.268A2 2 0 0020 18a2 2 0 00-3.732-1H10a2 2 0 110-4h4a4 4 0 000-8H7.732A2 2 0 106 8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Attribution;
