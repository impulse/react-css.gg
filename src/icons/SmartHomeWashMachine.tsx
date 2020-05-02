import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const SmartHomeWashMachine = forwardRef(
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
          d="M6 4h12a1 1 0 011 1v3H5V5a1 1 0 011-1zm13 15v-9H5v9a1 1 0 001 1h12a1 1 0 001-1zM3 5a3 3 0 013-3h12a3 3 0 013 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V5zm4 0a1 1 0 000 2h2a1 1 0 000-2H7zm7 2a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm-4 9a2 2 0 11-4 0 2 2 0 014 0zm2 0a4 4 0 11-8 0 4 4 0 018 0z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
export default SmartHomeWashMachine;
