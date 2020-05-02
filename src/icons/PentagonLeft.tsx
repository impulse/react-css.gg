import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PentagonLeft = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M16 12l2-5H8l-2 5 2 5h10l-2-5zm-.954 3l-1.2-3 1.2-3H9.354l-1.2 3 1.2 3h5.692z"
        fill="currentColor"
      />
    </svg>
  );
});
export default PentagonLeft;
