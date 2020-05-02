import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Drop = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M6.343 19.52a8 8 0 010-11.313L12 2.55l5.657 5.657A8 8 0 016.343 19.521z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
});
export default Drop;
