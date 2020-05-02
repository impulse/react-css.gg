import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushChevronRightO = forwardRef(
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
          d="M14 8h2v8h-2V8zM8.703 16.243l-1.415-1.414L10.117 12 7.288 9.172l1.415-1.415L12.945 12l-4.242 4.243z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zm-2 0a9 9 0 10-18 0 9 9 0 0018 0z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PushChevronRightO;
