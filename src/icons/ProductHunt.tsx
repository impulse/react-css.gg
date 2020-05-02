import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ProductHunt = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M12 19a7 7 0 110-14 7 7 0 010 14zm-9-7a9 9 0 1118 0 9 9 0 01-18 0zm6 4V8h4a3 3 0 110 6h-2v2H9zm5-5a1 1 0 01-1 1h-2v-2h2a1 1 0 011 1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ProductHunt;
