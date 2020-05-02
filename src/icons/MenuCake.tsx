import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MenuCake = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 8a2 2 0 100-4 2 2 0 000 4zM5 10a1 1 0 100 2h14a1 1 0 100-2H5zM4 15a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM5 18a1 1 0 100 2h14a1 1 0 100-2H5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MenuCake;
