import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const DropOpacity = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15.945 21.956A9 9 0 015.635 7.5l6.365-6.364L18.364 7.5a8.97 8.97 0 011.991 3.012 9.002 9.002 0 01-1.991 9.716 8.987 8.987 0 01-2.419 1.728zM7.05 8.914L12 3.964l4.95 4.95a6.977 6.977 0 012.048 4.783H5.002A6.976 6.976 0 017.05 8.914z"
        fill="currentColor"
      />
    </svg>
  );
});
export default DropOpacity;
