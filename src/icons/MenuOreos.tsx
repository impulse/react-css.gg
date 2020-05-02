import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MenuOreos = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7 3a3 3 0 00-3 3h16a3 3 0 00-3-3H7zM7 11a3 3 0 01-3-3h16a3 3 0 01-3 3H7zM7 13a3 3 0 00-3 3h16a3 3 0 00-3-3H7zM7 21a3 3 0 01-3-3h16a3 3 0 01-3 3H7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MenuOreos;
