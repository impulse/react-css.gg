import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const BorderStyleDashed = forwardRef(
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
          d="M4 11h4v2H4v-2zM10 11h4v2h-4v-2zM20 11h-4v2h4v-2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default BorderStyleDashed;
