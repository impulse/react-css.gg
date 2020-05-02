import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongLeft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M1.027 11.993l4.235 4.25L6.68 14.83l-1.821-1.828 18.115-.002v-2l-18.12.002L6.69 9.174 5.277 7.757l-4.25 4.236z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowLongLeft;
