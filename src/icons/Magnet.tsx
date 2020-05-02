import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Magnet = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8 2.5H4v3h4v-3zM20 2.5h-4v3h4v-3z"
        fill="currentColor"
        fillOpacity={0.5}
      />
      <path
        d="M8 7.5H4v6a8 8 0 1016 0v-6h-4v6a4 4 0 01-8 0v-6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Magnet;
