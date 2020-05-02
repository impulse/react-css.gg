import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PentagonBottomRight = forwardRef(
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
          d="M10.33 8.232L13.66 4l5 8.66-3.33 4.232-5.33.768L5 9l5.33-.768zm-2.12 2.326l3.197-.46 1.998-2.54 2.846 4.93-1.998 2.539-3.198.46-2.846-4.929z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PentagonBottomRight;
