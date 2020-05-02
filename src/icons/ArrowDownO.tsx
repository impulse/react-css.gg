import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowDownO = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14.829 12.026l1.414 1.414L12 17.683 7.757 13.44l1.415-1.414L11 13.854V6.317h2v7.537l1.829-1.828z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.778 19.778c-4.296 4.296-11.26 4.296-15.556 0-4.296-4.296-4.296-11.26 0-15.556 4.296-4.296 11.26-4.296 15.556 0 4.296 4.296 4.296 11.26 0 15.556zm-1.414-1.414A9 9 0 115.636 5.636a9 9 0 0112.728 12.728z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowDownO;
