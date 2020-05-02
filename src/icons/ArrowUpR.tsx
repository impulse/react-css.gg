import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowUpR = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M14.854 11.974l1.415-1.414-4.243-4.243-4.243 4.243 1.414 1.414 1.829-1.828v7.537h2v-7.537l1.828 1.828z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 19a4 4 0 004 4h14a4 4 0 004-4V5a4 4 0 00-4-4H5a4 4 0 00-4 4v14zm4 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowUpR;
