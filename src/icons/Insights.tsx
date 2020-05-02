import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Insights = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M15 8h4v12H5V10h4V4h6v4zm-2-2h-2v12h2V6zm2 4v8h2v-8h-2zm-6 2v6H7v-6h2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Insights;
