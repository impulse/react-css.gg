import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronDoubleRightR = forwardRef(
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
          d="M8.464 7.757L7.05 9.172 9.88 12 7.05 14.828l1.415 1.415L12.707 12 8.464 7.757z"
          fill="currentColor"
        />
        <path
          d="M11.293 9.172l1.414-1.415L16.95 12l-4.243 4.243-1.414-1.415L14.12 12l-2.828-2.828z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 5a4 4 0 00-4-4H5a4 4 0 00-4 4v14a4 4 0 004 4h14a4 4 0 004-4V5zm-4-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ChevronDoubleRightR;
