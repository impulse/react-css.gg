import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Export = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16.95 5.968l-1.414 1.414L13 4.846v12.196h-2V4.847L8.465 7.382 7.05 5.968 12 1.018l4.95 4.95z"
        fill="currentColor"
      />
      <path
        d="M5 20.982v-10h4v-2H3v14h18v-14h-6v2h4v10H5z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Export;
