import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Timer = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13 5.07A7.002 7.002 0 0112 19 7 7 0 017.262 6.847L5.847 5.432A9 9 0 1011 3.055v6.03h2V5.072z"
        fill="currentColor"
      />
      <path
        d="M7.707 8.707a1 1 0 000 1.414l2.829 2.829a1 1 0 001.414-1.414L9.12 8.707a1 1 0 00-1.414 0z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Timer;
