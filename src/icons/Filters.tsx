import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Filters = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M4.708 15.44a6.968 6.968 0 003.997 1.266 7 7 0 106.59-9.413A7 7 0 104.708 15.44zM5.855 13.8a4.976 4.976 0 002.432.886 6.97 6.97 0 011.256-4.408 6.97 6.97 0 013.713-2.687 5 5 0 10-7.4 6.21zm12.29-3.603a4.977 4.977 0 00-2.432-.885 6.97 6.97 0 01-1.256 4.408 6.97 6.97 0 01-3.713 2.687 5 5 0 107.4-6.21z"
        fill="currentColor"
      />
    </svg>
  );
});
export default Filters;
