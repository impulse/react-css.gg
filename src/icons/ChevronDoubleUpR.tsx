import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronDoubleUpR = forwardRef(
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
          d="M14.828 12.481l1.415-1.414L12 6.824l-4.243 4.243 1.415 1.414L12 9.653l2.828 2.828z"
          fill="currentColor"
        />
        <path
          d="M14.828 16.724l1.415-1.414L12 11.067 7.757 15.31l1.415 1.414L12 13.895l2.828 2.829z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 4.774a4 4 0 00-4-4H5a4 4 0 00-4 4v14a4 4 0 004 4h14a4 4 0 004-4v-14zm-4-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-14a2 2 0 00-2-2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ChevronDoubleUpR;
