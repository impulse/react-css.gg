import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Style = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13 21v-8h8v8h-8zm2-6h4v4h-4v-4zM3 11V3h8v8H3zm2-6h4v4H5V5z"
        fill="currentColor"
      />
      <path d="M18 6v6h-2V8h-4V6h6zM12 18H6v-6h2v4h4v2z" fill="currentColor" />
    </svg>
  );
});
export default Style;
