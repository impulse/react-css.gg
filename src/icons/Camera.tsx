import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Camera = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 4.5v2h8v1H3a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 002.99-2.751L24 17.5v-8l-6.01.751A3 3 0 0015 7.5h-1v-2a1 1 0 00-1-1H4zm14 7.766v2.468l4 .5v-3.468l-4 .5zM16 10.5a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1v-6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Camera;
