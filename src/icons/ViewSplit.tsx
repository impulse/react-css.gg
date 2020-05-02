import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ViewSplit = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M2 8a3 3 0 013-3h14a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3V8zm11-1h6a1 1 0 011 1v8a1 1 0 01-1 1h-6V7zm-2 0H5a1 1 0 00-1 1v8a1 1 0 001 1h6V7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ViewSplit;
