import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MergeVertical = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M8.976 12L4.733 7.757 3.32 9.172 6.147 12 3.32 14.828l1.414 1.415L8.976 12zM12 19a1 1 0 01-1-1V6a1 1 0 112 0v12a1 1 0 01-1 1zM15.024 12l4.243 4.243 1.414-1.415L17.853 12l2.828-2.828-1.414-1.415L15.024 12z"
        fill="currentColor"
      />
    </svg>
  );
});
export default MergeVertical;
