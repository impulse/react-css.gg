import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowTopRightO = forwardRef(
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
          d="M14 13.963h2v-6h-6v2h2.586l-5.33 5.33 1.414 1.414 5.33-5.33v2.586z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm2 0a9 9 0 1118 0 9 9 0 01-18 0z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowTopRightO;
