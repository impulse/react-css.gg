import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const BorderStyleDotted = forwardRef(
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
          d="M3 11H1v2h2v-2zM7 11H5v2h2v-2zM9 11h2v2H9v-2zM15 11h-2v2h2v-2zM17 11h2v2h-2v-2zM23 11h-2v2h2v-2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default BorderStyleDotted;
