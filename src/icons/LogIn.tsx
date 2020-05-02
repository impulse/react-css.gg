import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const LogIn = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15.486 20h4a2 2 0 002-2V6a2 2 0 00-2-2h-4v2h4v12h-4v2z"
        fill="currentColor"
      />
      <path
        d="M10.158 17.385l-1.42-1.408 3.92-3.953H3.513a1 1 0 110-2h9.163L8.696 6.077l1.408-1.42 6.391 6.337-6.337 6.391z"
        fill="currentColor"
      />
    </svg>
  );
});
export default LogIn;
