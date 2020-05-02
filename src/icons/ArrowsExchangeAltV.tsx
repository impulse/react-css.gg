import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsExchangeAltV = forwardRef(
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
          d="M12.984 4.993a1 1 0 011.848-.531L17.52 7.15a1 1 0 11-1.415 1.414l-1.12-1.121v7.55a1 1 0 01-2 0v-10zM11.016 19.007a1 1 0 01-1.848.531L6.48 16.85a1 1 0 011.415-1.414l1.12 1.121v-7.55a1 1 0 012 0v10z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowsExchangeAltV;
