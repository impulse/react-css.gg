import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PentagonTopLeft = forwardRef(
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
          d="M14.33 15.16L11 19.392l-5-8.66L9.33 6.5l5.33-.768 5 8.66-5.33.768zm2.121-2.326l-3.198.46-1.998 2.54-2.846-4.93 1.998-2.539 3.198-.46 2.846 4.929z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PentagonTopLeft;
