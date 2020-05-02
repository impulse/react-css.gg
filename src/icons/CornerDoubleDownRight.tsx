import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const CornerDoubleDownRight = forwardRef(
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
          d="M12.6 7.68L7.638 2.741 2.701 7.704l1.418 1.41L6.522 6.7l-.014 6.036a4.8 4.8 0 004.788 4.812l5.928.014-2.239 2.303 1.434 1.394 4.88-5.019-5.019-4.88-1.394 1.434 2.436 2.369-6.02-.015a2.4 2.4 0 01-2.394-2.406l.014-5.9 2.268 2.256 1.41-1.418z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default CornerDoubleDownRight;
