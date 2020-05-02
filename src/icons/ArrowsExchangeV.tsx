import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsExchangeV = forwardRef(
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
          d="M12.984 15a1 1 0 001.848.53l2.688-2.687a1 1 0 00-1.415-1.414l-1.12 1.12V5a1 1 0 00-2 0v9.95.05zM11.016 9a1 1 0 00-1.848-.53l-2.687 2.687a1 1 0 101.414 1.414l1.121-1.12V19a1 1 0 102 0V9.05 9z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowsExchangeV;
