import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Repeat = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M18.37 8l-4.5 2.598V9H6.89v4h-2V7h8.98V5.402L18.37 8zM10.13 17h8.98v-6h-2v4h-6.98v-1.598L5.63 16l4.5 2.598V17z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Repeat;
