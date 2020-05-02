import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Terrain = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8 10l-5 8h10l-5-8zM10.529 10.754L13.5 6 21 18h-5.943l-4.528-7.246z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Terrain;
