import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Gift = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17.535 2.879a3 3 0 00-4.242 0l-1.414 1.414c-.06.06-.118.122-.172.186a3.01 3.01 0 00-.171-.186L10.12 2.879A3 3 0 105.88 7.12L6.757 8H1v6h2v8h18v-8h2V8h-6.343l.878-.879a3 3 0 000-4.242zM14.707 7.12l1.414-1.414a1 1 0 00-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414zm-4.586-1.414L8.707 4.293a1 1 0 10-1.414 1.414l1.414 1.414a1 1 0 101.414-1.414zM21 10v2H3v-2h18zm-8.083 4H19v6h-6.083v-6zm-1.834 0v6H5v-6h6.083z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Gift;
