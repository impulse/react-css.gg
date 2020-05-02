import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushChevronLeftO = forwardRef(
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
          d="M10 16H8V8h2v8zM15.297 7.757l1.415 1.415L13.883 12l2.829 2.828-1.415 1.415L11.055 12l4.242-4.243z"
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
export default PushChevronLeftO;
