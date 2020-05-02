import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MoveRight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M5 17v-2h8v2H5zM5 9V7h8v2H5z" fill="currentColor" />
      <path d="M5 13v-2h10V7.965l4.071 4-4.071 4V13H5z" fill="currentColor" />
    </svg>
  );
});
export default MoveRight;
