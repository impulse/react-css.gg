import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Template = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 3v6h18V3H3zm16 2H5v2h14V5zM3 11v10h8V11H3zm6 2H5v6h4v-6z"
        fill="currentColor"
      />
      <path
        d="M21 11h-8v2h8v-2zM13 15h8v2h-8v-2zM21 19h-8v2h8v-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Template;
