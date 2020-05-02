import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronDoubleUpO = forwardRef(
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
          d="M14.828 12.707l1.415-1.414L12 7.05l-4.243 4.243 1.415 1.414L12 9.88l2.828 2.828z"
          fill="currentColor"
        />
        <path
          d="M14.828 16.95l1.415-1.414L12 11.293l-4.243 4.243 1.415 1.414L12 14.12l2.828 2.829z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12zm2 0a9 9 0 1018 0 9 9 0 00-18 0z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ChevronDoubleUpO;
