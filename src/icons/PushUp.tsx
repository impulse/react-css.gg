import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushUp = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 22.288h2V7.802l3.243 3.243 1.414-1.414L12 3.974 6.343 9.63l1.414 1.414L11 7.802v14.486zM18 3H6V1h12v2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PushUp;
