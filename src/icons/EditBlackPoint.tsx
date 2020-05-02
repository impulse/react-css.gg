import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const EditBlackPoint = forwardRef(
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
          d="M8 12a4 4 0 118 0 4 4 0 01-8 0zm4 1a1 1 0 110-2 1 1 0 010 2z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9 7a7 7 0 110-14 7 7 0 010 14z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default EditBlackPoint;
