import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MenuHotdog = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7 6a3 3 0 00-3 3h16a3 3 0 00-3-3H7zM7 18a3 3 0 01-3-3h16a3 3 0 01-3 3H7zM3 11a1 1 0 100 2h18a1 1 0 100-2H3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MenuHotdog;
