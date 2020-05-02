import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Swap = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16 13v-1.5h-6v-2h6V8l3 2.5-3 2.5zM8 17v-1.5h6v-2H8V12l-3 2.5L8 17z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Swap;
