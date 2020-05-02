import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Sidebar = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M21 20H7V4h14v16zm-2-2H9V6h10v12z"
        fill="currentColor"
      />
      <path d="M3 20h2V4H3v16z" fill="currentColor" />
    </svg>
  );
});
export default Sidebar;
