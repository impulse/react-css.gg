import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLeftO = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4.222 19.778c-4.296-4.296-4.296-11.26 0-15.556 4.296-4.296 11.26-4.296 15.556 0 4.296 4.296 4.296 11.26 0 15.556-4.296 4.296-11.26 4.296-15.556 0zm1.414-1.414A9 9 0 1118.364 5.636 9 9 0 015.636 18.364z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowLeftO;
