import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CreditCard = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4 9a1 1 0 011-1h4a1 1 0 010 2H5a1 1 0 01-1-1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3a4 4 0 00-4 4v10a4 4 0 004 4h16a4 4 0 004-4V7a4 4 0 00-4-4H4zm16 2H4a2 2 0 00-2 2v7h20V7a2 2 0 00-2-2zm2 11H2v1a2 2 0 002 2h16a2 2 0 002-2v-1z"
        fill="currentColor"
      />
    </svg>
  );
});
export default CreditCard;
