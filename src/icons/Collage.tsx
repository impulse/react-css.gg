import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Collage = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 5a3 3 0 013-3h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm9-1h4a1 1 0 011 1v8h-5V4zm0 11v5h4a1 1 0 001-1v-4h-5zM11 4H7a1 1 0 00-1 1v3h5V4zM6 19v-9h5v10H7a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Collage;
