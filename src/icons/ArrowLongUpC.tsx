import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongUpC = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7.758 5.23l4.274-4.21 4.21 4.275-1.424 1.403-1.804-1.83-.071 12.287a3.001 3.001 0 01-1.029 5.825 3 3 0 01-.971-5.835l.071-12.315-1.853 1.826L7.758 5.23zm4.175 13.75a1 1 0 10-.01 2 1 1 0 00.01-2z"
        fill="currentColor"
      />
    </svg>
  );
});
export default ArrowLongUpC;
