import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongDown = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13.012 19.162l1.813-1.822 1.418 1.41-4.231 4.255-4.255-4.231 1.41-1.418 1.846 1.834L10.998.997l2-.002.014 18.167z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowLongDown;
