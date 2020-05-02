import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowBottomRight = forwardRef(
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
          d="M5.757 7.172l1.415-1.415 9.07 9.071v-4.585h2v8h-8v-2h4.586l-9.07-9.071z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowBottomRight;
