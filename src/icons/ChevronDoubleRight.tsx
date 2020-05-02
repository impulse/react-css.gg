import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronDoubleRight = forwardRef(
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
          d="M5.636 7.757L7.05 6.343 12.707 12 7.05 17.657l-1.414-1.414L9.88 12 5.636 7.757z"
          fill="currentColor"
        />
        <path
          d="M12.707 6.343l-1.414 1.414L15.536 12l-4.243 4.243 1.414 1.414L18.364 12l-5.657-5.657z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ChevronDoubleRight;
