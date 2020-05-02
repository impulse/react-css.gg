import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PentagonRight = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8 12L6 7h10l2 5-2 5H6l2-5zm.954 3l1.2-3-1.2-3h5.692l1.2 3-1.2 3H8.954z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PentagonRight;
