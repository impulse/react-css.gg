import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MenuLeft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M2 5.995c0-.55.446-.995.995-.995h8.01a.995.995 0 010 1.99h-8.01A.995.995 0 012 5.995zM2 12c0-.55.446-.995.995-.995h18.01a.995.995 0 110 1.99H2.995A.995.995 0 012 12zM2.995 17.01a.995.995 0 000 1.99h12.01a.995.995 0 000-1.99H2.995z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MenuLeft;
