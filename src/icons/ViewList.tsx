import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ViewList = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3H5zm2 2H5a1 1 0 00-1 1v1h3V7zm2 0v2h11V8a1 1 0 00-1-1H9zm-2 4H4v2h3v-2zm2 2v-2h11v2H9zm-2 2H4v1a1 1 0 001 1h2v-2zm2 2v-2h11v1a1 1 0 01-1 1H9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ViewList;
