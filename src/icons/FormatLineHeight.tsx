import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatLineHeight = forwardRef(
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
          d="M5.097 6.997h2.077l-3-3-3 3h1.923v10.006H1.159l3 3 3-3H5.097V6.997zM22.841 7h-14V5h14v2zM22.841 11h-14V9h14v2zM8.841 15h14v-2h-14v2zM22.841 19h-14v-2h14v2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default FormatLineHeight;
