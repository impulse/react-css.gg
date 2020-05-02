import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SmartHomeBoiler = forwardRef(
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
          d="M5 5a4 4 0 014-4h6a4 4 0 014 4v16h-3.856l.742 2h-2l-.742-2h-2l.742 2h-2l-.742-2H5V5zm4-2h6a2 2 0 012 2v2H7V5a2 2 0 012-2zM7 9h10v10H7V9z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default SmartHomeBoiler;
