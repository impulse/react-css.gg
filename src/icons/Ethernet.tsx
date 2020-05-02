import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Ethernet = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 .5v20h7v3h2v-3h7V.5H4zm14 2H6v6h4v6h4v-6h4v-6zm-12 16v-8h2v6h8v-6h2v8H6z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Ethernet;
