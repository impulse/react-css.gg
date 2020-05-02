import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Sketch = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5.209 3h13.694l1.209 7.253-8.056 10.933L4 10.253 5.209 3zm1.694 2l-.791 4.747 5.944 8.067L18 9.747 17.209 5H6.903z"
        fill="currentColor"
      />
      <path d="M8.056 8h8v2h-8V8z" fill="currentColor" />
    </svg>
  );
});
export default Sketch;
