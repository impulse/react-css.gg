import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MenuBoxed = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8.016 6.982a1.003 1.003 0 000 2.006h7.95a1.003 1.003 0 000-2.006h-7.95zM7.016 12c0-.552.447-1.003 1-1.003h7.95a1.003 1.003 0 010 2.006h-7.95c-.553 0-1-.45-1-1.003zM8.025 15.012a1.003 1.003 0 000 2.007h7.95a1.003 1.003 0 000-2.007h-7.95z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MenuBoxed;
