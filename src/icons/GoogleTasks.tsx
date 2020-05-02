import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const GoogleTasks = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16.768 5.714a2 2 0 013.064 2.572L10.833 19.01a2 2 0 11-3.064-2.57l8.999-10.726zM3 12.74a2 2 0 114 0 2 2 0 01-4 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default GoogleTasks;
