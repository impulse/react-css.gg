import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PentagonTopRight = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.33 15.16L5 14.392l5-8.66 5.33.768 3.33 4.232-5 8.66-3.33-4.232zm3.075.674l-1.998-2.54-3.198-.46 2.846-4.93 3.198.461 1.998 2.54-2.846 4.929z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PentagonTopRight;
