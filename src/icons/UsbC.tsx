import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const UsbC = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M8 11a1 1 0 100 2h8a1 1 0 100-2H8z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12a5 5 0 015-5h8a5 5 0 010 10H8a5 5 0 01-5-5zm5-3h8a3 3 0 110 6H8a3 3 0 110-6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default UsbC;
