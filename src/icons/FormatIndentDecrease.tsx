import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const FormatIndentDecrease = forwardRef(
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
          d="M20 7H4V5h16v2zM20 11h-8V9h8v2zM12 15h8v-2h-8v2zM9 9l-5 3 5 3V9zM4 17v2h16v-2H4z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default FormatIndentDecrease;
