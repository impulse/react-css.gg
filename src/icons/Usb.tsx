import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Usb = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M10 4.5h1v2h-1v-2zM14 4.5h-1v2h1v-2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8.5v-7h10v7h2v11a3 3 0 01-3 3H8a3 3 0 01-3-3v-11h2zm2-5h6v5H9v-5zm8 7H7v9a1 1 0 001 1h8a1 1 0 001-1v-9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Usb;
