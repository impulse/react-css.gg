import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongDownR = forwardRef(
  ({ size = 24, ...props }: Props, ref: any) => {
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
          d="M16.242 4.641L11.999.4 7.756 4.64 11 7.886l.013 11.9-1.845-1.834-1.41 1.418 4.255 4.231 4.23-4.254-1.417-1.41-1.813 1.822L13 7.883l3.242-3.242zm-5.657 0l1.414-1.414 1.414 1.414L12 6.056 10.585 4.64z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowLongDownR;
