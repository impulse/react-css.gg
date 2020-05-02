import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Carousel = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 3a3 3 0 00-3 3v4a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v4a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z"
        fill="currentColor"
      />
      <path
        d="M7 20a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM5 15a1 1 0 100 2h14a1 1 0 100-2H5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Carousel;
