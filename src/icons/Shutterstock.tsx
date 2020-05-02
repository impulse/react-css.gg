import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Shutterstock = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 17a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-1v4h-4v1zM11 6a1 1 0 011 1v1H8v4H7a1 1 0 01-1-1V7a1 1 0 011-1h4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3H5zm14 2H5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Shutterstock;
