import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowBottomLeft = forwardRef(
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
          d="M18.243 7.172l-1.415-1.415-9.07 9.071v-4.585h-2v8h8v-2H9.17l9.072-9.071z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowBottomLeft;
