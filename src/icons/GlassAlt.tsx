import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const GlassAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2h14l-1.64 16.398A4 4 0 0113.38 22h-2.76a4 4 0 01-3.98-3.602L5 2zm2.51 5l-.3-3h9.58l-.3 3H7.51zm.2 2l.92 9.199A2 2 0 0010.62 20h2.76a2 2 0 001.99-1.801L16.29 9H7.71z"
        fill="currentColor"
      />
    </svg>
  );
});
export default GlassAlt;
