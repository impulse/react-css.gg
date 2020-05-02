import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushChevronDown = forwardRef(
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
          d="M5 7.414L6.414 6l5.657 5.657L17.728 6l1.414 1.414-7.07 7.071L5 7.415zM19 16.343H5v2h14v-2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PushChevronDown;
