import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongUpR = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7.793 4.61L12.068.398l4.21 4.275-1.424 1.403-1.804-1.831-.07 11.886 3.227 3.226-4.243 4.243-4.242-4.243 3.259-3.26.07-11.89-1.854 1.826L7.793 4.61zm4.171 16.163l1.414-1.415-1.414-1.414-1.414 1.414 1.414 1.415z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowLongUpR;
