import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MinimizeAlt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M20.073 2l1.415 1.414-5.85 5.85h2.544v2h-6v-6h2v2.627L20.073 2zM11.182 12.264v6h-2v-2.422L3.414 21.61 2 20.196l5.932-5.932h-2.75v-2h6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MinimizeAlt;
