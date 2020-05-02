import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SpinnerTwoAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 22c5.523 0 10-4.477 10-10h-3a7 7 0 01-7 7v3zM2 12C2 6.477 6.477 2 12 2v3a7 7 0 00-7 7H2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default SpinnerTwoAlt;
