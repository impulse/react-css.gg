import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerDoubleDownLeft = forwardRef(
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
          d="M11.295 7.694l4.84-5.056 5.057 4.84-1.383 1.445-2.462-2.357.162 6.034a4.8 4.8 0 01-4.67 4.927l-5.925.16 2.294 2.246-1.4 1.43-5-4.9 4.898-5 1.429 1.4-2.377 2.427 6.017-.162a2.4 2.4 0 002.335-2.463l-.158-5.898-2.212 2.31-1.445-1.383z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default CornerDoubleDownLeft;
