import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Unavailable = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636zm-2.172 11.97L6.393 7.808a7.001 7.001 0 009.8 9.8zM16.95 7.05a7.002 7.002 0 01.657 9.142l-9.8-9.799a7.001 7.001 0 019.143.657z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Unavailable;
