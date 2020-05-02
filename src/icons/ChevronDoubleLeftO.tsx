import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ChevronDoubleLeftO = forwardRef(
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
          d="M12.707 9.172l-1.414-1.415L7.05 12l4.243 4.243 1.414-1.415L9.88 12l2.828-2.828z"
          fill="currentColor"
        />
        <path
          d="M15.536 7.757l1.414 1.415L14.12 12l2.829 2.828-1.414 1.415L11.293 12l4.243-4.243z"
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
export default ChevronDoubleLeftO;
