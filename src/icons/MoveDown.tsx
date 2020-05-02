import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MoveDown = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M7 5h2v8H7V5zM15 5h2v8h-2V5z" fill="currentColor" />
      <path d="M11 5h2v10h3.035l-4 4.071-4-4.071H11V5z" fill="currentColor" />
    </svg>
  );
});
export default MoveDown;
