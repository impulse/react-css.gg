import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Maze = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11.37 9.593L8.779 7 1 14.778l2.593 2.593 7.778-7.778zM15.222 7L23 14.778l-2.576 2.576-5.202-5.202-5.202 5.202-2.576-2.576L15.222 7z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Maze;
