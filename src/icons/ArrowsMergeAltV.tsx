import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowsMergeAltV = forwardRef(
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
          d="M18 1.503v2h-5v4.172l1.829-1.829 1.414 1.415L12 11.503 7.757 7.261l1.415-1.415L11 7.675V3.503H6v-2h12zM18 20.497v2H6v-2h5v-4.172l-1.828 1.829-1.415-1.415L12 12.497l4.243 4.242-1.415 1.415L13 16.325v4.172h5z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowsMergeAltV;
