import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongDownE = forwardRef(
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
          d="M14.998 1.02h-6v6h2.001l.013 12.145-1.844-1.834-1.41 1.418 4.254 4.23 4.23-4.254-1.417-1.41-1.813 1.823-.013-12.118h1.999v-6zm-4 2h2v2h-2v-2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowLongDownE;
