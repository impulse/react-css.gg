import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Stories = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15 6H9a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1zM9 4a3 3 0 00-3 3v10a3 3 0 003 3h6a3 3 0 003-3V7a3 3 0 00-3-3H9z"
        fill="currentColor"
      />
      <path
        d="M2 6a1 1 0 012 0v12a1 1 0 11-2 0V6zM20 6a1 1 0 112 0v12a1 1 0 11-2 0V6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Stories;
