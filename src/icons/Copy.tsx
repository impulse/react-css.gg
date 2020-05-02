import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Copy = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13 7H7V5h6v2zM13 11H7V9h6v2zM7 15h6v-2H7v2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 19V1h14v4h4v18H7v-4H3zm12-2V3H5v14h10zm2-10v12H9v2h10V7h-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Copy;
