import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Modem = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M18 16.634a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.866 3.134a1 1 0 10-1 1.732l13.454 7.768H2v4a4 4 0 004 4h12a4 4 0 004-4v-4l-16.134-9.5zM20 14.634H4v2a2 2 0 002 2h12a2 2 0 002-2v-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Modem;
