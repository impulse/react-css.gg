import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Microsoft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 3h8v8H3V3zM3 13h8v8H3v-8zM13 3h8v8h-8V3zM13 13h8v8h-8v-8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Microsoft;
