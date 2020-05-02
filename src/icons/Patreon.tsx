import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Patreon = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        opacity={0.5}
        d="M21 10a6 6 0 11-12 0 6 6 0 0112 0z"
        fill="currentColor"
      />
      <path d="M3 4h4v16H3V4z" fill="currentColor" />
    </svg>
  );
});
export default Patreon;
