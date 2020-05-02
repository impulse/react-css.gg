import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Swiss = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3v18h18V3H3zm11 4h-4v3H7v4h3v3h4v-3h3v-4h-3V7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Swiss;
