import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SidebarRight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 4h14v16H3V4zm2 2h10v12H5V6z"
        fill="currentColor"
      />
      <path d="M21 4h-2v16h2V4z" fill="currentColor" />
    </svg>
  );
});
export default SidebarRight;
