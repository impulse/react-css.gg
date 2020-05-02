import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PentagonBottomLeft = forwardRef(
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
          d="M13.33 9.232L10 5l-5 8.66 3.33 4.232 5.33.768 5-8.66-5.33-.768zm2.121 2.326l-3.198-.46-1.998-2.54-2.846 4.93 1.998 2.539 3.198.46 2.846-4.929z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PentagonBottomLeft;
