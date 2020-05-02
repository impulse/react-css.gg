import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronDoubleRightO = forwardRef(
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
          d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12zm2 0a9 9 0 1018 0 9 9 0 00-18 0z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default ChevronDoubleRightO;
