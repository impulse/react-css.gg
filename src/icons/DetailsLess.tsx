import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const DetailsLess = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 9a1 1 0 000 2h18a1 1 0 100-2H3zM3 13a1 1 0 100 2h12a1 1 0 100-2H3z"
        fill="currentColor"
      />
    </svg>
  );
});
export default DetailsLess;
