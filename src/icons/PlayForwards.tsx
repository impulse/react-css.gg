import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PlayForwards = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M21.002 17h-3V7h3v10zM17.002 12L10 17V7l7.002 5zM2 17l7.002-5L2 7v10z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PlayForwards;
