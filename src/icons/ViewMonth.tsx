import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ViewMonth = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M2 8a3 3 0 013-3h14a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3V8zm15-1h2a1 1 0 011 1v1h-3V7zm-2 0h-2v2h2V7zm-4 0H9v2h2V7zM7 7H5a1 1 0 00-1 1v1h3V7zm-3 4v2h3v-2H4zm0 4v1a1 1 0 001 1h2v-2H4zm5 2h2v-2H9v2zm4 0h2v-2h-2v2zm4 0h2a1 1 0 001-1v-1h-3v2zm3-4v-2h-3v2h3zm-9 0H9v-2h2v2zm4 0h-2v-2h2v2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ViewMonth;
