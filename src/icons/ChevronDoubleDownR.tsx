import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronDoubleDownR = forwardRef(
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
          d="M1 5a4 4 0 014-4h14a4 4 0 014 4v14a4 4 0 01-4 4H5a4 4 0 01-4-4V5zm4-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ChevronDoubleDownR;
