import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Remote = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17.051 4.322l1.415 1.414-4.243 4.243 4.243 4.242-1.415 1.415-5.656-5.657 5.656-5.657zM6.949 19.678l-1.415-1.414 4.243-4.242-4.243-4.243L6.95 8.365l5.656 5.657-5.656 5.656z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Remote;
