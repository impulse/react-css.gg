import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const LoadbarSound = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11 6h2v12h-2V6zM7 13h2v5H7v-5zM15 9h2v9h-2V9z"
        fill="currentColor"
      />
    </svg>
  );
});
export default LoadbarSound;
