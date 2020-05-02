import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const LoadbarAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <rect
        opacity={0.3}
        x={3}
        y={10}
        width={18}
        height={4}
        rx={2}
        fill="currentColor"
      />
      <rect x={7} y={10} width={10} height={4} rx={2} fill="currentColor" />
    </svg>
  );
});
export default LoadbarAlt;
