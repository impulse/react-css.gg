import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SmartHomeRefrigerator = forwardRef(
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
          d="M9 6a1 1 0 012 0v2a1 1 0 11-2 0V6zM10 13a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4a3 3 0 013-3h8a3 3 0 013 3v16a3 3 0 01-3 3H8a3 3 0 01-3-3V4zm3-1h8a1 1 0 011 1v6H7V4a1 1 0 011-1zm-1 9h10v8a1 1 0 01-1 1H8a1 1 0 01-1-1v-8z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default SmartHomeRefrigerator;
