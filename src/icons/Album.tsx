import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Album = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M2 19a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3H5a3 3 0 00-3 3v14zm18 0a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h5v8.011h2.395L14 9.864l1.605 2.147H18V4h1a1 1 0 011 1v14zM16 4h-4v5.336l2-2.676 2 2.676V4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Album;
