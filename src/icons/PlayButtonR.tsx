import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PlayButtonR = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM5 1a4 4 0 00-4 4v14a4 4 0 004 4h14a4 4 0 004-4V5a4 4 0 00-4-4H5z"
        fill="currentColor"
      />
      <path d="M16 12l-6 4.33V7.67L16 12z" fill="currentColor" />
    </svg>
  );
});
export default PlayButtonR;
