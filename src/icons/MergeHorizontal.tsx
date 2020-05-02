import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MergeHorizontal = forwardRef(
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
          d="M12 8.976l4.243-4.243-1.415-1.414L12 6.147 9.172 3.32 7.757 4.733 12 8.976zM5 12a1 1 0 011-1h12a1 1 0 010 2H6a1 1 0 01-1-1zM12 15.024l-4.243 4.243 1.415 1.414L12 17.853l2.828 2.828 1.415-1.414L12 15.024z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default MergeHorizontal;
