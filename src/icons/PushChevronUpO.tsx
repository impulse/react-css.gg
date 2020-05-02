import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const PushChevronUpO = forwardRef(
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
          d="M12 3a9 9 0 100 18 9 9 0 000-18zm0-2C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm-4 9V8h8v2H8zm8.243 5.297l-1.414 1.415L12 13.883l-2.828 2.829-1.415-1.415L12 11.055l4.243 4.242z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default PushChevronUpO;
