import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerDoubleRightDown = forwardRef(
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
          d="M7.694 12.705l-5.056-4.84 4.84-5.057L8.923 4.19 6.566 6.653 12.6 6.49a4.8 4.8 0 014.927 4.669l.16 5.926 2.246-2.294 1.43 1.4-4.9 5-5-4.898 1.4-1.429 2.427 2.378-.162-6.018a2.4 2.4 0 00-2.463-2.335l-5.898.158 2.31 2.212-1.383 1.445z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default CornerDoubleRightDown;
