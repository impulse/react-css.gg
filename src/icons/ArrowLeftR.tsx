import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLeftR = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M11.948 14.829l-1.414 1.414L6.29 12l4.243-4.243 1.414 1.415L10.12 11h7.537v2H10.12l1.828 1.829z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 19a4 4 0 01-4 4H5a4 4 0 01-4-4V5a4 4 0 014-4h14a4 4 0 014 4v14zm-4 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowLeftR;
