import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsExpandLeftAlt = forwardRef(
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
          d="M10.1 2.1v2H5.516l5.778 5.779-1.414 1.414L4.1 5.515V10.1h-2v-8h8zM21.9 13.9h-2v4.585l-5.779-5.778-1.414 1.414 5.778 5.778H13.9v2h8v-8zM16.243 9.172l-1.415-1.415-7.07 7.072 1.414 1.414 7.07-7.071z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowsExpandLeftAlt;
