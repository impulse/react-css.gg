import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrangeBack = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 3h8v4h6v6h4v8h-8v-4H7v-6H3V3zm12 10h-2v2H9v-4h2V9h4v4z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrangeBack;
