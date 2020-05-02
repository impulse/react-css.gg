import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const File = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 5a3 3 0 013-3h8a7 7 0 017 7v10a3 3 0 01-3 3H6a3 3 0 01-3-3V5zm10-1H6a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V9h-6V4zm5.584 3A5.009 5.009 0 0015 4.1V7h3.584z"
        fill="currentColor"
      />
    </svg>
  );
});
export default File;
