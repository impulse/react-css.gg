import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushLeft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M22.288 11v2H7.802l3.243 3.243-1.414 1.414L3.974 12 9.63 6.343l1.414 1.414L7.802 11h14.486zM3 18V6H1v12h2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PushLeft;
