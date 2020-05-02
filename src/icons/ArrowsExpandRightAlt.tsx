import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsExpandRightAlt = forwardRef(
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
          d="M13.9 2.1v2h4.585L12.707 9.88l1.414 1.414L19.9 5.515V10.1h2v-8h-8zM5.515 19.9H10.1v2h-8v-8h2v4.585l5.778-5.778 1.414 1.414L5.515 19.9zM9.172 7.757L7.757 9.172l7.071 7.07 1.415-1.414-7.071-7.07z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowsExpandRightAlt;
