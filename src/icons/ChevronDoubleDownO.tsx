import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronDoubleDownO = forwardRef(
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
          d="M7.757 8.464L9.172 7.05 12 9.88l2.828-2.829 1.415 1.415L12 12.707 7.757 8.464z"
          fill="currentColor"
        />
        <path
          d="M9.172 11.293l-1.415 1.414L12 16.95l4.243-4.243-1.415-1.414L12 14.12l-2.828-2.828z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-2 0a9 9 0 11-18 0 9 9 0 0118 0z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ChevronDoubleDownO;
