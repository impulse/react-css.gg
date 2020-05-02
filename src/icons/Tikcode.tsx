import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Tikcode = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M9 5H5v4h4V5zM3 3v8h8V3H3zM19 5h-4v4h4V5zm-6-2v8h8V3h-8zM9 15H5v4h4v-4zm-6-2v8h8v-8H3z"
        fill="currentColor"
      />
      <path
        d="M13 13h2v8h-2v-8zM16 13h2v8h-2v-8zM19 13h2v8h-2v-8z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Tikcode;
