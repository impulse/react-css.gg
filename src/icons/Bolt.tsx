import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Bolt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9 21.5l8.5-8.5-4.5-3 2-7.5L6.5 11l4.5 3-2 7.5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Bolt;
