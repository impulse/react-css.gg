import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushChevronUpR = forwardRef(
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
          d="M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2zm-4-2a4 4 0 004 4h14a4 4 0 004-4V5a4 4 0 00-4-4H5a4 4 0 00-4 4v14zm8.172-2.288l-1.415-1.415L12 11.055l4.243 4.242-1.415 1.415L12 13.883l-2.828 2.829zM8 10h8V8H8v2z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PushChevronUpR;
