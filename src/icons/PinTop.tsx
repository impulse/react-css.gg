import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PinTop = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M12 14a2 2 0 110 4 2 2 0 010-4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 5a1 1 0 010-2h8a1 1 0 110 2h-3v5.083A6.002 6.002 0 0112 22a6 6 0 01-1-11.917V5H8zm4 7a4 4 0 110 8 4 4 0 010-8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PinTop;
