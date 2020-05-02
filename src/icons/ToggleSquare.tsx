import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ToggleSquare = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9 9a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1h4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 7a2 2 0 00-2-2H2a2 2 0 00-2 2v10a2 2 0 002 2h20a2 2 0 002-2V7zm-2 0H2v10h20V7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ToggleSquare;
