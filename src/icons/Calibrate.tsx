import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Calibrate = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12.05 5a8.97 8.97 0 016.314 2.586l-4.243 4.243A2.99 2.99 0 0012.05 11c-.855 0-1.625.357-2.172.93L5.636 7.687A8.973 8.973 0 0112.05 5zM12.05 19a3 3 0 100-6 3 3 0 000 6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Calibrate;
