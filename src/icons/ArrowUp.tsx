import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowUp = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M17.657 8.962l-1.418 1.411-3.255-3.27-.013 13.605-2-.002.013-13.568-3.23 3.215-1.41-1.417 5.67-5.644 5.643 5.67z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowUp;
