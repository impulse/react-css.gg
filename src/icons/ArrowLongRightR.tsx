import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowLongRightR = forwardRef(
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
          d="M19.351 7.725l4.25 4.236-4.235 4.25-1.417-1.412 1.814-1.82-11.866.04-3.255 3.256-4.243-4.243L4.642 7.79l3.229 3.23 11.911-.04-1.843-1.837 1.412-1.417zm-14.71 5.721l1.415-1.414-1.414-1.414-1.415 1.414 1.415 1.414z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ArrowLongRightR;
