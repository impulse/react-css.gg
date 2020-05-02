import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MoveLeft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M19.071 17v-2h-8v2h8zM19.071 9V7h-8v2h8z" fill="currentColor" />
      <path
        d="M19.071 13v-2h-10V7.965l-4.071 4 4.071 4V13h10z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MoveLeft;
