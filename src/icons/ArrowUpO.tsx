import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowUpO = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14.829 11.948l1.414-1.414L12 6.29l-4.243 4.243 1.415 1.414L11 10.12v7.537h2V10.12l1.829 1.828z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.778 4.222c-4.296-4.296-11.26-4.296-15.556 0-4.296 4.296-4.296 11.26 0 15.556 4.296 4.296 11.26 4.296 15.556 0 4.296-4.296 4.296-11.26 0-15.556zm-1.414 1.414A9 9 0 105.636 18.364 9 9 0 0018.364 5.636z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowUpO;
