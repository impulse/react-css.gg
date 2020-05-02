import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Trophy = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M13 15.9a5.002 5.002 0 004-4.9V4H7v7a5.002 5.002 0 004 4.9V18H9v2h6v-2h-2v-2.1zM9 6h6v5a3 3 0 11-6 0V6z"
        fill="currentColor"
      />
      <path d="M18 6h2v5h-2V6zM6 6H4v5h2V6z" fill="currentColor" />
    </svg>
  );
});
export default Trophy;
